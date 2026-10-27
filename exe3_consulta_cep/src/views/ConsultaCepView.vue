<script setup>
// Importa ref para manter os valores reativos e sincronizados com a interface.
import { ref } from 'vue'

// Guarda o CEP digitado, os dados retornados pela API e uma mensagem de erro.
const cep = ref('')
const endereco = ref(null)
const mensagemErro = ref('')

// Consulta a API ViaCEP e atualiza a tela com o endereço ou uma mensagem de erro.
async function buscarCep() {
  // Limpa qualquer erro anterior antes de iniciar uma nova consulta.
  mensagemErro.value = ''

  try {
    // Aguarda a resposta da API e converte o corpo JSON em um objeto JavaScript.
    const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    const dados = await resposta.json()

    // A API indica CEP inexistente com a propriedade erro.
    if (dados.erro) {
      endereco.value = null
      mensagemErro.value = 'CEP não encontrado.'
      return
    }

    // Armazena os campos do endereço para que o template os apresente.
    endereco.value = dados
  } catch (error) {
    // Trata falhas de conexão ou conversão da resposta.
    endereco.value = null
    mensagemErro.value = 'Não foi possível consultar o CEP.'
  }
}
</script>

<template>
  <!-- Formulário e resultado da consulta de endereço. -->
  <main class="pagina">
    <h1>Consulta de CEP</h1>

    <!-- Impede o envio tradicional do formulário e chama a função de consulta. -->
    <form @submit.prevent="buscarCep">
      <label for="cep">CEP</label>
      <input id="cep" v-model="cep" type="text" placeholder="Digite 8 números">
      <button type="submit">Buscar</button>
    </form>

    <!-- A mensagem só aparece quando a consulta encontra um erro. -->
    <p v-if="mensagemErro" class="erro">{{ mensagemErro }}</p>

    <!-- Os campos são renderizados somente depois que um endereço é encontrado. -->
    <div v-if="endereco">
      <h2>Endereço encontrado</h2>
      <p>CEP: {{ endereco.cep }}</p>
      <p>Rua: {{ endereco.logradouro }}</p>
      <p>Bairro: {{ endereco.bairro }}</p>
      <p>Cidade: {{ endereco.localidade }}</p>
      <p>Estado: {{ endereco.uf }}</p>
    </div>
  </main>
</template>
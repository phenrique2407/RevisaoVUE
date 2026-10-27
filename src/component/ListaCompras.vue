<script setup>
// ref cria variavel reativa: qunado o valor mudar
// a tela atualiza sozinha

import {ref} from 'vue';

const texto = ref(""); //guarda o que o usuaio digitar
const itens = ref([]); //guarda a lista de itens(comeca vazia)

function adicionar(){
    if (texto.value=="") return; // não deixar add "itens vazios"
    itens.value.push(texto.value); // add o texto digitado
    texto.value=""; // limpa o campo
}
</script>

<template>
    <h2>Lista de Compras</h2>
    <!-- v-model "liga" o input à varivael texto -->
    <input v-model="texto">
    <!-- @click ganha a função adicionar quando o botão for clicado -->
    <button @click="adicionar">Adicionar</button>

    <ul v-if="itens.length">
    <!-- vfor repete o "li" para cada item; :key identifica cada um -->
     <!-- {{  }} exibe o valor da variavel na tela (no template não usa .value)-->
        <li v-for="item in itens" :key="item">{{item}}</li>
    </ul>
    <p v-else>Lista Vazia</p>
</template>
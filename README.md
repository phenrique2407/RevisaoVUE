# Consulta de CEP

Aplicação de revisão desenvolvida com Vue 3, Vue Router e Vite. Disponibiliza
uma lista de compras na página inicial, uma página Sobre e uma consulta de
endereços por CEP com a API pública ViaCEP.

## Requisitos

- Node.js `^22.18.0` ou `>=24.12.0`
- npm

## Instalação e execução

Na raiz do repositório, instale as dependências e inicie o servidor:

```sh
npm install
npm run dev
```

Abra no navegador o endereço local informado pelo Vite. A aplicação possui as
rotas `/`, `/sobre` e `/cep`.

## Consultar um CEP

1. Acesse **Consulta CEP** pela navegação.
2. Informe um CEP com oito dígitos e pressione **Buscar**.
3. Quando encontrado, o endereço exibe CEP, rua, bairro, cidade e estado.

Se o CEP não for encontrado ou houver uma falha de conexão, a página informa o
erro. A consulta é feita diretamente à [API ViaCEP](https://viacep.com.br/).

## Build de produção

```sh
npm run build
```

Para servir localmente o build:

```sh
npm run preview
```

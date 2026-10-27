# Consulta de CEP

Aplicação de revisão desenvolvida com Vue 3 e Vite. Permite consultar um CEP
pela API pública ViaCEP e exibir o endereço retornado. O projeto também inclui
uma lista de compras e navegação entre as páginas inicial, Sobre e Consulta CEP.

## Requisitos

- Node.js compatível com a versão indicada em `package.json`
- npm

## Instalação

Na pasta `exe3_consulta_cep`, instale as dependências:

```sh
npm install
```

## Executar em desenvolvimento

```sh
npm run dev
```

Abra no navegador o endereço local informado pelo Vite.

## Consultar um CEP

1. Acesse **Consulta CEP** pela navegação.
2. Digite o CEP e pressione **Buscar**.
3. Se encontrado, o endereço será exibido; se não, a página mostrará uma
   mensagem explicativa.

A consulta é feita diretamente à API pública
[ViaCEP](https://viacep.com.br/).

## Build de produção

```sh
npm run build
```

Para visualizar localmente o build:

```sh
npm run preview
```

<template>
  <!-- Cabeçalho comum às páginas desta aplicação. -->
  <div>
    <h1>Ativadade 2</h1>
  </div>
  <!-- Links do Vue Router alteram a página sem recarregar o documento. -->
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/sobre">Sobre</RouterLink>
    <RouterLink to="/cep">Consulta CEP</RouterLink>
  </nav>

  <!-- Exibe aqui o componente da rota que corresponde ao endereço atual. -->
  <RouterView />

</template>

<style scoped>
/* Organiza os links horizontalmente e define o espaço entre eles. */
nav {
  display: flex;
  gap: 16px;
}
</style>

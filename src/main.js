// Importa o inicializador do Vue, o componente raiz e a configuração de rotas.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Cria a aplicação Vue e registra o roteador para habilitar a navegação entre páginas.
const app = createApp(App)

app.use(router)
// Monta a aplicação no elemento #app definido em index.html.
app.mount('#app')

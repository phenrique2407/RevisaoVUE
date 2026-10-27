// Importa o roteador e cada tela que pode ser acessada pela navegação.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import SobreView from "@/views/SobreView.vue";
import ConsultaCepView from "@/views/ConsultaCepView.vue";

// Associa os endereços da aplicação às telas correspondentes.
const router = createRouter({
    history: createWebHistory(),
    routes: [

        // Página inicial com a lista de compras.
        {
            path: '/',
            component: HomeView
        },

        // Página com informações sobre o projeto.
        {
            path: '/sobre',
            component: SobreView
        },

        // Página que consulta e apresenta os dados de um CEP.
        {
            path: '/cep',
            component: ConsultaCepView
        }

    ]
})
// Exporta a configuração para registro em main.js.
export default router
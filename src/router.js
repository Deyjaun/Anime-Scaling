import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import about from './views/about.vue'
import Debate from './views/Debate.vue'




const routes = [
   {
     path: '/',
     component: HomePage
    },

    {
    path: '/about',
    component: about

    },

    {
    path: '/Debate',
    component: Debate
    },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
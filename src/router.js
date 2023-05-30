import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import About from './views/about.vue'
import sign from './views/sign-up.vue'




const routes = [
   {
     path: '/',
     component: HomePage
    },
    {
    path: '/about',
    components: About

    },
    {
    Path: '/sign-up',
    components: sign
    },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TermsView from '../views/TermsView.vue'
import ThemeView from '../views/ThemeView.vue'
import InputView from '../views/InputView.vue'
import FinView from '../views/FinView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView
    },
    {
      path: '/theme',
      name: 'theme',
      component: ThemeView
    },
    {
      path: '/name',
      name: 'name',
      component: InputView
    },
    {
      path: '/fin',
      name: 'fin',
      component: FinView
    }
  ]
})

export default router

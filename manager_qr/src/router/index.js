import { createRouter, createWebHashHistory } from 'vue-router'
import amount from '../views/[amount].vue'
import number from '../views/[number].vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:amount",
      name: "amount",
      component: amount
    },
    {
      path: "/s/:number",
      name: "number",
      component: number
    }
  ]
})

export default router

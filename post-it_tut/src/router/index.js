import { createRouter, createWebHistory } from 'vue-router'

import main from '../views/TestView.vue'
import postits from '../views/PostItsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: main
    },
    {
      path: '/postit/id=:id',
      name: 'postits',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: postits
    }
  ]
})

export default router

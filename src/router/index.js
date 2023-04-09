import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Profile'
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

export default router
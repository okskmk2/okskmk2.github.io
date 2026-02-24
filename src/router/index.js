import { createRouter, createWebHashHistory } from 'vue-router'
import Profile from '@/views/Profile.vue'
import ImageConvert from '@/views/ImageConvert.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Profile'
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/ImageConvert',
      name: 'ImageConvert',
      component: ImageConvert
    }
  ]
})

export default router

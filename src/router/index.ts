import { createRouter, createWebHistory } from 'vue-router'
import EnquiriesView from '@/views/EnquiriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'enquiries',
      component: EnquiriesView
    }
  ]
})

export default router

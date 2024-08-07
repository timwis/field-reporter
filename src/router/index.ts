import { createRouter, createWebHistory } from 'vue-router'
import EnquiriesView from '@/views/EnquiriesView.vue'
import NewEnquiryView from '@/views/NewEnquiryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'enquiries',
      component: EnquiriesView
    },
    {
      path: '/new',
      name: 'new-enquiry',
      component: NewEnquiryView
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import EnquiriesView from '@/views/EnquiriesView.vue'
import NewEnquiryView from '@/views/NewEnquiryView.vue'
import SelectLocation from '@/views/SelectLocation.vue'

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
    },
    {
      path: '/new/location',
      name: 'select-location',
      component: SelectLocation
    }
  ]
})

export default router

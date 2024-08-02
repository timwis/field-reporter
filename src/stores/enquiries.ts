import { defineStore } from 'pinia'

import type { Enquiry } from '@/types'
import { sampleEnquiries } from './sample-enquiries'

export const useEnquiriesStore = defineStore({
  id: 'enquiries',
  state: () => ({
    enquiries: sampleEnquiries as Enquiry[]
  }),
  actions: {
    addEnquiry(enquiry: Enquiry) {
      this.enquiries.push(enquiry)
    }
  }
})

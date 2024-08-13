import { defineStore } from 'pinia'

import type { Enquiry } from '@/types'

export const useDraftStore = defineStore('draft', {
  state: () => ({
    enquired_at: new Date(),
    case_reference: '',
    location_address: '',
    location_geometry: null,
    result: '',
    notes: ''
  }) // as Enquiry
})

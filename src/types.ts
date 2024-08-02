export interface Enquiry {
  id: string
  created_at: Date
  occurred_at: Date
  user_name: string
  location: {
    geometry: {
      lat: number
      lng: number
    }
    address: string
    details?: string
  }
  status: 'pending' | 'attempted' | 'completed' | 'cancelled'
  has_cameras: boolean
  result: string
}

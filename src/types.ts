import type { RxJsonSchema } from 'rxdb'

export interface Enquiry {
  id: string
  created_at: string
  occurred_at: string
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

export const enquirySchema: RxJsonSchema<Enquiry> = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100 },
    created_at: { type: 'string', format: 'date-time' },
    occurred_at: { type: 'string', format: 'date-time' },
    user_name: { type: 'string' },
    location: {
      type: 'object',
      properties: {
        geometry: {
          type: 'object',
          properties: {
            lat: { type: 'number' },
            lng: { type: 'number' }
          },
          required: ['lat', 'lng']
        },
        address: { type: 'string' },
        details: { type: 'string' }
      },
      required: ['geometry', 'address']
    },
    status: {
      type: 'string',
      enum: ['pending', 'attempted', 'completed', 'cancelled']
    },
    has_cameras: { type: 'boolean' },
    result: { type: 'string' }
  },
  required: [
    'id',
    'created_at',
    'occurred_at',
    'user_name',
    'location',
    'status',
    'has_cameras',
    'result'
  ]
}

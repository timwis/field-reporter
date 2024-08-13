import type { RxJsonSchema } from 'rxdb'

export type LatLngArray = [number, number]

export const RESULT_VALUES = [
  { label: 'Retrieved', value: 'retrieved' },
  { label: 'Revisit', value: 'revisit' },
  { label: 'Non-starter', value: 'non_starter' }
]

export interface Enquiry {
  id: string
  created_at: string
  enquired_at: string
  case_reference: string
  location_address: string
  location_geometry: LatLngArray
  result: 'retrieved' | 'revisit' | 'non_starter'
  notes: string
}

export const enquirySchema: RxJsonSchema<Enquiry> = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100, final: true },
    created_at: { type: 'string', format: 'date-time', final: true },
    enquired_at: { type: 'string', format: 'date-time' },
    case_reference: { type: 'string' },
    location_address: { type: 'string' },
    location_geometry: {
      type: 'array',
      items: { type: 'number' },
      minItems: 2,
      maxItems: 2
    },
    result: {
      type: 'string',
      enum: ['retrieved', 'revisit', 'non_starter']
    },
    notes: { type: 'string' }
  },
  required: [
    'id',
    'created_at',
    'enquired_at',
    'case_reference',
    'location_address',
    'location_geometry',
    'result',
    'notes'
  ]
}

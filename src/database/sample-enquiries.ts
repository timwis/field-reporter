import type { Enquiry } from '@/types'

export const sampleEnquiries: Enquiry[] = [
  {
    id: '1',
    created_at: new Date('2023-01-01T10:00:00Z').toISOString(),
    occurred_at: new Date('2023-01-01T09:00:00Z').toISOString(),
    user_name: 'John Doe',
    location: {
      geometry: {
        lat: 40.7128,
        lng: -74.006
      },
      address: '123 Main St, New York, NY',
      details: 'Near Central Park'
    },
    status: 'pending',
    has_cameras: true,
    result: 'N/A'
  },
  {
    id: '2',
    created_at: new Date('2023-02-01T11:00:00Z').toISOString(),
    occurred_at: new Date('2023-02-01T10:00:00Z').toISOString(),
    user_name: 'Jane Smith',
    location: {
      geometry: {
        lat: 34.0522,
        lng: -118.2437
      },
      address: '456 Elm St, Los Angeles, CA',
      details: 'Downtown LA'
    },
    status: 'attempted',
    has_cameras: false,
    result: 'Attempted but not successful'
  },
  {
    id: '3',
    created_at: new Date('2023-03-01T12:00:00Z').toISOString(),
    occurred_at: new Date('2023-03-01T11:00:00Z').toISOString(),
    user_name: 'Alice Johnson',
    location: {
      geometry: {
        lat: 51.5074,
        lng: -0.1278
      },
      address: '789 Oak St, London, UK',
      details: 'Near Big Ben'
    },
    status: 'completed',
    has_cameras: true,
    result: 'Successfully completed'
  },
  {
    id: '4',
    created_at: new Date('2023-04-01T13:00:00Z').toISOString(),
    occurred_at: new Date('2023-04-01T12:00:00Z').toISOString(),
    user_name: 'Bob Brown',
    location: {
      geometry: {
        lat: 48.8566,
        lng: 2.3522
      },
      address: '101 Pine St, Paris, France',
      details: 'Near Eiffel Tower'
    },
    status: 'cancelled',
    has_cameras: false,
    result: 'Cancelled by user'
  },
  {
    id: '5',
    created_at: new Date('2023-05-01T14:00:00Z').toISOString(),
    occurred_at: new Date('2023-05-01T13:00:00Z').toISOString(),
    user_name: 'Charlie Davis',
    location: {
      geometry: {
        lat: 35.6895,
        lng: 139.6917
      },
      address: '202 Maple St, Tokyo, Japan',
      details: 'Near Shibuya Crossing'
    },
    status: 'pending',
    has_cameras: true,
    result: 'N/A'
  }
]

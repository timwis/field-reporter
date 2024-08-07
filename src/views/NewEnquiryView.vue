<script setup lang="ts">
import { useDatabase } from '@/database'
import PageHeader from '@/components/PageHeader.vue'

const database = useDatabase()

const STATUS_VALUES = {
  pending: 'Pending',
  attempted: 'Attempted',
  completed: 'Completed',
  cancelled: 'Cancelled'
}

let enquiry = {
  location: {
    geometry: {
      lat: 51.464795,
      lng: -0.11303
    },
    address: ''
  },
  has_cameras: false,
  result: '',
  status: 'pending'
}

async function onSubmit(_event: Event) {
  console.log('Form submitted')
  const augmentedEnquiry = {
    ...enquiry,
    id: Math.random().toString(36).substring(2, 10),
    created_at: new Date().toISOString(),
    occurred_at: new Date().toISOString(),
    user_name: 'Tester'
  }
  await database.enquiries.insert(augmentedEnquiry)
}
</script>

<template>
  <PageHeader>New Enquiry</PageHeader>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <form @submit.prevent="onSubmit">
        <div class="space-y-5">
          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <div class="mt-2">
              <input
                id="address"
                name="address"
                v-model.trim="enquiry.location.address"
                type="text"
                placeholder="12 HIGH STREET, NW1"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
              <input
                id="has_cameras"
                name="has_cameras"
                type="checkbox"
                v-model="enquiry.has_cameras"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="text-sm leading-6">
              <label for="has_cameras" class="font-medium text-gray-900">Has camera(s)</label>
            </div>
          </div>

          <div>
            <label for="result" class="block text-sm font-medium leading-6 text-gray-900">
              Result
            </label>
            <div class="mt-2">
              <textarea
                id="result"
                name="result"
                v-model.trim="enquiry.result"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label for="status" class="block text-sm font-medium leading-6 text-gray-900">
              Status
            </label>
            <div class="mt-2">
              <select
                id="status"
                name="status"
                v-model="enquiry.status"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option v-for="(label, key) in STATUS_VALUES" :key="key" :value="key">
                  {{ label }}
                </option>
              </select>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

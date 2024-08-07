<script setup lang="ts">
import { useDatabase } from '@/database'
import PageHeader from '@/components/PageHeader.vue'

const database = useDatabase()

const STATUS_VALUES = [
  { value: 'pending', label: 'Pending' },
  { value: 'attempted', label: 'Attempted' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' }
]

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
              <InputText
                id="address"
                name="address"
                v-model.trim="enquiry.location.address"
                type="text"
                placeholder="12 HIGH STREET, NW1"
                class="w-full"
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
              <Textarea
                id="result"
                name="result"
                v-model.trim="enquiry.result"
                rows="3"
                class="w-full"
              />
            </div>
          </div>

          <div>
            <label for="status" class="block text-sm font-medium leading-6 text-gray-900">
              Status
            </label>
            <div class="mt-2">
              <Select
                id="status"
                name="status"
                v-model="enquiry.status"
                :options="STATUS_VALUES"
                optionLabel="label"
                optionValue="value"
                class="w-full"
              />
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <Button label="Cancel" severity="secondary" />
            <Button label="Save" type="submit" />
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

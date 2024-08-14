<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { toRaw } from 'vue'
import { v7 as uuidv7 } from 'uuid'

import { RESULT_VALUES } from '@/types'
import { useDatabase } from '@/database'
import { useDraftStore } from '@/stores/draft'
import PageHeader from '@/components/PageHeader.vue'
import MapThumbnail from '@/components/MapThumbnail.vue'

const database = useDatabase()
const router = useRouter()

let draft = useDraftStore()

async function onSubmit(_event: Event) {
  const created_at = new Date().toISOString()
  const augmentedEnquiry = {
    ...toRaw(draft.$state),
    id: uuidv7(),
    created_at,
    enquired_at: draft.enquired_at.toISOString()
  }
  await database.enquiries.insert(augmentedEnquiry)
  draft.$reset()
  router.push({ name: 'enquiries' })
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
              Location
            </label>
            <div class="mt-2">
              <RouterLink to="/new/location">
                <MapThumbnail :location="draft.location_geometry" required />
              </RouterLink>
            </div>
          </div>

          <div>
            <label for="case_reference" class="block text-sm font-medium leading-6 text-gray-900">
              Case reference
            </label>
            <div class="mt-2">
              <InputText
                id="case_reference"
                name="case_reference"
                v-model.trim="draft.case_reference"
                type="text"
                placeholder="01/12345/XY"
                class="w-full"
                required
              />
            </div>
          </div>

          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <div class="mt-2">
              <InputText
                id="address"
                name="address"
                v-model.trim="draft.location_address"
                type="text"
                placeholder="12 HIGH STREET, NW1"
                class="w-full"
                required
              />
            </div>
          </div>

          <div>
            <label for="result" class="block text-sm font-medium leading-6 text-gray-900">
              Result
            </label>
            <div class="mt-2">
              <Select
                id="result"
                name="result"
                v-model="draft.result"
                :options="RESULT_VALUES"
                optionLabel="label"
                optionValue="value"
                class="w-full"
                required
              />
            </div>
          </div>

          <div>
            <label for="notes" class="block text-sm font-medium leading-6 text-gray-900">
              Notes
            </label>
            <div class="mt-2">
              <Textarea
                id="notes"
                name="notes"
                v-model.trim="draft.notes"
                rows="4"
                class="w-full"
              />
            </div>
          </div>

          <div>
            <label for="enquired_at" class="block text-sm font-medium leading-6 text-gray-900">
              Enquired at
            </label>
            <div class="mt-2">
              <DatePicker
                id="enquired_at"
                name="enquired_at"
                v-model="draft.enquired_at"
                class="w-full"
                showTime
                dateFormat="dd M yy"
                hourFormat="24"
                fluid
                required
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

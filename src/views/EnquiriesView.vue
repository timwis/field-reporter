<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import EnquiryList from '@/components/EnquiryList.vue'
import type { Enquiry } from '@/types'
import { useDatabase } from '@/database'

const enquiries = ref<Enquiry[]>([])
const database = useDatabase()
const observable = database.enquiries.find({ sort: [{ created_at: 'desc' }] }).$
const subscription = observable.subscribe((results: Enquiry[]) => {
  enquiries.value = results
})

onUnmounted(() => {
  subscription.unsubscribe()
})

async function onDelete(enquiry: Enquiry) {
  await enquiry.remove()
}
</script>

<template>
  <PageHeader>Enquiries</PageHeader>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <RouterLink
        to="/new"
        class="block md:inline-block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add enquiry
      </RouterLink>
      <EnquiryList :enquiries="enquiries" @delete="onDelete" />
    </div>
  </main>
</template>

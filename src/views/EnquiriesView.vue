<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import EnquiryList from '@/components/EnquiryList.vue'
import type { Enquiry } from '@/types'
import { useDatabase } from '@/database'
import { sampleEnquiries } from '@/database/sample-enquiries'

const enquiries = ref<Enquiry[]>([])
const database = useDatabase()
const observable = database.enquiries.find({ sort: [{ created_at: 'desc' }] }).$
const subscription = observable.subscribe((results: Enquiry[]) => {
  enquiries.value = results
})

onUnmounted(() => {
  subscription.unsubscribe()
})

async function loadSampleData() {
  const response = await database.enquiries.bulkInsert(sampleEnquiries)
  console.log(response)
}
</script>

<template>
  <PageHeader>Enquiries</PageHeader>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <button @click="loadSampleData" class="btn">Load Sample Data</button>
      <EnquiryList :enquiries="enquiries" />
    </div>
  </main>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import EnquiryList from '@/components/EnquiryList.vue'
</script>

<template>
  <PageHeader>Enquiries</PageHeader>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <EnquiryList />
    </div>
  </main>
</template>

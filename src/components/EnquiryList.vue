<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Enquiry } from '@/types'

const props = defineProps<{
  enquiries: Enquiry[]
}>()
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <RouterLink
          to="/new"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add enquiry
        </RouterLink>
      </div>
    </div>
    <div class="-mx-4 mt-8 sm:-mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Location
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Occurred at
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="enquiry in enquiries" :key="enquiry.id">
            <td
              class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0"
            >
              {{ enquiry.location_address }}
              <dl class="font-normal lg:hidden">
                <dt class="sr-only">Occurred at</dt>
                <dd class="mt-1 truncate text-gray-700">{{ enquiry.enquired_at }}</dd>
                <dt class="sr-only sm:hidden">Result</dt>
                <dd class="mt-1 truncate text-gray-500 sm:hidden">{{ enquiry.notes }}</dd>
              </dl>
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
              {{ enquiry.enquired_at }}
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ enquiry.result }}</td>
            <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900"
                >Edit<span class="sr-only">, {{ enquiry.location_address }}</span></a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

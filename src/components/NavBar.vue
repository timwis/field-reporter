<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-indigo-600">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center gap-x-12 text-lg text-white font-semibold">
        <RouterLink to="/">Field Reporter</RouterLink>
      </div>
    </nav>
  </header>
</template>

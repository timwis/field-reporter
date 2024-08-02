<script setup lang="ts">
import { RouterView } from 'vue-router'
import PWABadge from '@/components/PWABadge.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="min-h-full">
    <NavBar />
    <RouterView />
  </div>
  <PWABadge />
</template>

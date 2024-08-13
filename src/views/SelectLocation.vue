<script setup lang="ts">
import { useRouter } from 'vue-router'

import type { LatLngArray } from '@/types'
import { useDraftStore } from '@/stores/draft'
import MapLocator from '@/components/MapLocator.vue'

const router = useRouter()
const draft = useDraftStore()

function onSave(location_geometry: LatLngArray) {
  // draft.setLocation(location)
  draft.$patch({ location_geometry })
  router.go(-1)
}
</script>

<template>
  <main>
    <div id="map-container">
      <MapLocator :location="draft.location_geometry" id="map" @save="onSave" />
    </div>
  </main>
</template>

<style lang="css">
#map-container {
  height: calc(100vh - 68px);
}
</style>

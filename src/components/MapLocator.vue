<template>
  <LMap
    :zoom="location ? LOCATED_ZOOM : DEFAULT_ZOOM"
    :center="location || DEFAULT_LOCATION"
    ref="map"
    class="crosshairs"
    @ready="onMapReady()"
    @locationfound="onLocationFound"
    @move.once="onFirstMove"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
      attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    />
    <LControl
      class="leaflet-control bg-white border-2 border-black/20 rounded p-2 text-base !cursor-pointer font-sans"
      position="topright"
      @click="onClickSave"
      >Save Location</LControl
    >
    <LCircleMarker
      v-if="userLocation"
      :lat-lng="userLocation"
      :radius="userLocationAccuracy ? userLocationAccuracy / 2 : undefined"
    />
  </LMap>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import type { LocationEvent } from 'leaflet'
import { LMap, LTileLayer, LCircleMarker, LControl } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

// TODO: Replace with L.LatLngExpression
import type { LatLngArray } from '@/types'

const props = defineProps<{
  location: LatLngArray | null
}>()

const emit = defineEmits<{
  save: (location: LatLngArray) => void
}>()

const DEFAULT_ZOOM = 13
const DEFAULT_LOCATION = [51.4630654, -0.1154922]
const LOCATED_ZOOM = 18
const userLocation = ref<LatLngArray | null>(null)
const userLocationAccuracy = ref<number | null>(null)
let hasMoved = false
const map = ref<InstanceType<typeof LMap> | null>(null)

function onMapReady() {
  map.value?.leafletObject.locate({
    enableHighAccuracy: true,
    maximumAge: 60000
  })
}

function onClickSave() {
  if (!map.value) return
  const center = map.value.leafletObject.getCenter()
  emit('save', [center.lat, center.lng])
}

function onLocationFound(event: LocationEvent) {
  console.log(event.latlng)
  userLocation.value = [event.latlng.lat, event.latlng.lng]
  userLocationAccuracy.value = event.accuracy
  if (!props.location && !hasMoved) {
    map.value?.leafletObject.setView(event.latlng, LOCATED_ZOOM)
  }
}

function onFirstMove(_event: Event) {
  hasMoved = true
}
</script>

<style lang="css">
.crosshairs:before,
.crosshairs:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 999;
}

.crosshairs:before {
  bottom: 50%;
  border-bottom: 1px #777 solid;
}

.crosshairs:after {
  right: 50%;
  border-right: 1px #777 solid;
}
</style>

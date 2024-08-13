<template>
  <div class="map-thumbnail-container">
    <div ref="mapThumbnail" class="map-thumbnail" />
    <input :value="location" :required="required" name="geometry" />
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  props: {
    required: { type: Boolean },
    location: { type: Object, default: () => {} }
  },
  mounted() {
    if (this.location) {
      const map = this.initMap(this.location)
      this.addBasemap(map)
    }
  },
  methods: {
    initMap(location) {
      const el = this.$refs.mapThumbnail
      return L.map(el, {
        trackResize: false,
        attributionControl: false,
        zoomControl: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        dragging: false,
        tap: false,
        keyboard: false
      }).setView(location, 20)
    },
    addBasemap(map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
    }
  }
}
</script>

<style scoped>
.map-thumbnail-container {
  position: relative;
}

.map-thumbnail {
  height: 125px;
  background-color: #f0f0f0;
  position: relative;
  color: black;
  font-weight: 100;
  z-index: 999;
}

.map-thumbnail:after {
  content: '+';
  font-size: 550%;
  font-weight: 300;
  position: absolute;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

input {
  position: absolute;
  top: 0;
  left: 0;
}

input:focus {
  outline: none;
}
</style>

<script lang="ts" src="./MapView.ts" />

<template>
  <div
    class="loading-map d-flex justify-content-center align-items-center"
    v-if="!isUserLocationReady"
  >
    <div class="text-center fw-bold fs-4">
      <span>Locating...</span>
    </div>
  </div>
  <div class="map-container" ref="mapElement" v-show="isUserLocationReady" />
</template>

<style scoped>
.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  height: 100vh;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}
</style>

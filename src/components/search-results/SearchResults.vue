<script lang="ts" src="./SearchResults" />
<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading...</h5>
  </div>
  <ul class="list-group mt-3" v-else-if="places.length > 0">
    <li
      class="list-group-item list-group-item-action"
      v-for="place in places"
      :key="place.id"
      :class="{ active: place.id === activePlace }"
      @click="onPlaceClicked(place)"
    >
      <h5>{{ place.text }}</h5>
      <p>
        {{ place.place_name }}
      </p>
      <div align="right">
        <button
          class="btn btn-outline-primary btn-sm"
          :class="
            place.id === activePlace
              ? 'btn-outline-light'
              : 'btn-outline-primary'
          "
          @click.self="getRouteDirections(place)"
        >
          Go!
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}
h5 {
  font-size: 15px !important;
}
p {
  font-size: 10px;
}
</style>

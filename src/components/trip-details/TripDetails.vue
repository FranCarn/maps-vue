<template>
  <div class="trip-container column" v-if="distance">
    <div class="col">
      Distance: <strong>{{ distance }} Kms</strong>
    </div>
    <div class="col">
      Duration: <strong>{{ duration }} Minutes</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { useMapStore } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TripDetails",
  setup() {
    const { distance, duration } = useMapStore();
    return { distance, duration };
  },
});
</script>

<style scoped>
.trip-container {
  background-color: #fff;
  border-radius: 10px;
  bottom: 50px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  left: 20px;
  padding: 10px;
  position: fixed;
  width: 350px;
}

strong {
  color: #42b983;
}
</style>

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mapboxgl from "mapbox-gl";

Mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNqajA2c3phbDA0aXczcHF3bnBz";

if (!navigator.geolocation) {
  throw new Error("Browser doesnt support GeoLocation");
}

createApp(App).use(store).use(router).mount("#app");

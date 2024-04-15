import { defineComponent, onMounted, ref, watch } from "vue";
import { usePlacesStore } from "@/composables";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "MapView",
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlacesStore();

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation.value) return;
      await Promise.resolve();
      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: "mapbox://styles/mapbox/dark-v10",
        center: userLocation.value,
        zoom: 15,
        testMode: true,
      });
      const myLocationPopUp = new Mapboxgl.Popup({
        offset: [0, -25],
      }).setLngLat(userLocation.value).setHTML(`
      <h4>I'm Here!</h4>
      `);
      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopUp)
        .addTo(map);
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(isUserLocationReady, () => {
      if (isUserLocationReady.value) initMap;
    });

    return { isUserLocationReady, userLocation, mapElement };
  },
});

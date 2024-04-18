import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/map/actions";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SearchResults",

  setup() {
    const { places, isLoadingPlaces, userLocation } = usePlacesStore();
    const { map, getRouteBetweenPoints, setPlaceMarkers } = useMapStore();

    const activePlace = ref("");

    watch(places, (newPlaces: Feature[]) => {
      activePlace.value = "";
      setPlaceMarkers(newPlaces);
    });

    return {
      places,
      isLoadingPlaces,
      activePlace,

      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
        const [lng, lat] = place.center;

        map.value?.flyTo({
          zoom: 15,
          center: [lng, lat],
        });
      },

      getRouteDirections: (place: Feature) => {
        if (!userLocation.value) return;

        const [lng, lat] = place.center;

        const [startLng, startLat] = userLocation.value;

        const start: LngLat = [startLng, startLat];
        const end: LngLat = [lng, lat];

        getRouteBetweenPoints(start, end);
      },
    };
  },
});

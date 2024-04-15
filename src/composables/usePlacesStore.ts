import { onMounted } from "vue";
import { StateInterface } from "@/store";
import { useStore } from "vuex";

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();

  onMounted(() => {
    if (!store.getters["places/isUserLocationReady"]) {
      store.dispatch("places/getInitialLocation");
    }
  });

  return {};
};


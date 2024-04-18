import { MutationTree } from "vuex";
import { PlacesState } from "./state";
import { Feature } from "@/interfaces/places";

const mutation: MutationTree<PlacesState> = {
  setLngLat(
    state: PlacesState,
    { longitude, latitude }: GeolocationCoordinates
  ) {
    state.userLocation = [longitude, latitude];
    state.isLoading = false;
  },
  setIsLoadingPlaces(state) {
    state.isLoadingPlaces = true;
  },
  setPlaces(state, places: Feature[]) {
    state.places = places;
    state.isLoadingPlaces = false;
  },
};

export default mutation;

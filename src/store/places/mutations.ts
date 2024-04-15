import { MutationTree } from "vuex";
import { PlacesState } from "./state";

const mutation: MutationTree<PlacesState> = {
  setLngLat(
    state: PlacesState,
    { longitude, latitude }: GeolocationCoordinates
  ) {
    state.userLocation = [longitude, latitude];
    state.isLoading = false;
  },
};

export default mutation;

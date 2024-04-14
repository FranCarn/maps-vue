import { createStore } from "vuex";

// My custom modules
import { PlacesState } from "./places/state";
import places from "./places";

export interface StateInterface {
  places: PlacesState;
}

export default createStore<StateInterface>({
  modules: {
    places,
  },
});

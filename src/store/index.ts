import { createStore } from "vuex";

// My custom modules
import { PlacesState } from "./places/state";
import places from "./places";

import { MapState } from "./map/state";
import map from "./map";

export interface StateInterface {
  places: PlacesState;
  map: MapState;
}

export default createStore<StateInterface>({
  modules: {
    places,
    map,
  },
});

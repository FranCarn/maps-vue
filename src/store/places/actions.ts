import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";

const actions: ActionTree<PlacesState, StateInterface> = {
  async getInitialLocation({ commit }) {
    await navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit("setLngLat", coords),
      (err) => {
        console.error(err);
        throw new Error("No geolocation :(");
      }
    );
  },
};

export default actions;
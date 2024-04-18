import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";
import { searchApi } from "@/api";
import { Feature, PlacesResponse } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit("setLngLat", coords),
      (err) => {
        console.error(err);
        throw new Error("No geolocation :(");
      }
    );
  },

  async searchPlacesByTerm(
    { commit, state },
    query: string
  ): Promise<Feature[]> {
    if (!query.length) {
      commit("setPlaces", []);
      return [];
    }

    if (!state.userLocation) {
      throw new Error("User haven't location");
    }

    commit("setIsLoadingPlaces");

    const res = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(","),
      },
    });

    commit("setPlaces", res.data.features);

    return res.data.features;
  },
};

export default actions;

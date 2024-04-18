import { Feature } from "@/interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  isLoadingPlaces: boolean;
  userLocation?: [number, number]; // lng, lat
  places: Feature[];
}

function state(): PlacesState {
  return {
    isLoadingPlaces: false,
    isLoading: true,
    userLocation: undefined,
    places: [],
  };
}

export default state;

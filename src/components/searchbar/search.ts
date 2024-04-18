import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-results/SearchResults.vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
  name: "SearchBar",
  components: {
    SearchResults,
  },
  setup() {
    const debounceTimeout = ref();

    const debouncedValue = ref<string>("");
    const { searchPlacesByTerm } = usePlacesStore();
    return {
      searchTerm: computed({
        get() {
          return debouncedValue.value;
        },
        set(value: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

          debounceTimeout.value = setTimeout(() => {
            debouncedValue.value = value;
            searchPlacesByTerm(value);
          }, 500);
        },
      }),
    };
  },
});

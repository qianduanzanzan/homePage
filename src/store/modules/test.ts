import { defineStore } from "pinia";

export const useTestStore = defineStore({
    id: "dark-mode",
    state: () => ({
      aaa: ''
    }),
    getters: {
        getTest: (state) => state.aaa,
    },
    actions: {
      test() {
        this.aaa = 'test'
      }
    }
  });

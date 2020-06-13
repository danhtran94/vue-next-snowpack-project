import { createStore } from "vuex";

export interface IStore {
  count: number;
}

export const store = createStore<IStore>({
  state: {
    count: 0,
  },
  mutations: {
    incCount(state) {
      state.count = state.count + 1;
    },
  },
  actions: {
    inc({ commit }) {
      commit("incCount");
    },
  },
});

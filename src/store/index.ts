import { createStore } from "vuex";

export const state = {
  num: 0,
};

export type State = typeof state;

export enum MutationTypes {
  INC_COUNT = "INC_COUNT",
}

export enum ActionTypes {
  ASYNC_INC = "ASYNC_INC",
}

export const store = createStore<State>({
  state: {
    num: 0,
  },
  mutations: {
    [MutationTypes.INC_COUNT](state) {
      state.num = state.num + 1;
    },
  },
  actions: {
    [ActionTypes.ASYNC_INC]({ commit }) {
      setTimeout(() => commit(MutationTypes.INC_COUNT), 500);
    },
  },
});

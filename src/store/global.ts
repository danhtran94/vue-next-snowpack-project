import { reactive, computed } from "vue";

const state = reactive({
  num: 0,
});

export const num = computed(() => state.num);

export function syncInc() {
  state.num++;
}

export function asyncInc() {
  setTimeout(() => syncInc(), 500);
}

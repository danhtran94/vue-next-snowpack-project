import { reactive, computed } from "vue";

const _state = reactive({
  num: 0,
});

export const rNum = computed(() => _state.num);

export function syncInc() {
  _state.num++;
}

export function asyncInc() {
  setTimeout(() => syncInc(), 500);
}

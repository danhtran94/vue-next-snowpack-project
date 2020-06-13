import { defineComponent, computed, Fragment } from "vue";
import { useStore } from "vuex";
import { jsx } from "src/utils/jsx";

import { State, ActionTypes } from "src/store/index";

export const PageHome = defineComponent({
  setup(props, ctx) {
    const store = useStore<State>();
    const count = computed(() => store.state.num);
    const inc = () => store.dispatch(ActionTypes.ASYNC_INC);

    return () => (
      <Fragment>
        <div>Simple counter:</div>
        <div>Number: {count.value}</div>
        <button onClick={inc}>increment</button>
      </Fragment>
    );
  },
});

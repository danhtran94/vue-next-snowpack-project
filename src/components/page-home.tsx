import { defineComponent, computed, Fragment } from "vue";
import { useStore } from "vuex";
import { jsx } from "src/utils/jsx";

import { IStore } from "src/store";

export const PageHome = defineComponent({
  setup(props, ctx) {
    const store = useStore<IStore>();
    const count = computed(() => store.state.count);
    const inc = () => store.dispatch("inc");

    return () => (
      <Fragment>
        <div>Simple counter:</div>
        <div>Number: {count.value}</div>
        <button onClick={inc}>increment</button>
      </Fragment>
    );
  },
});

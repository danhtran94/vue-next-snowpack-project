import { defineComponent, Fragment } from "vue";
import { jsx } from "src/utils/jsx";

import { num, asyncInc } from "src/store/global";

export const PageHome = defineComponent({
  setup(props, ctx) {
    return () => (
      <Fragment>
        <div>Simple counter:</div>
        <div>Number: {num.value}</div>
        <button onClick={asyncInc}>increment</button>
      </Fragment>
    );
  },
});

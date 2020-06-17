import { defineComponent } from "vue";
import { jsx } from "src/utils/jsx";
import { pathOr } from "rambda";

import { rResponse } from "./router";

export const RouteView = defineComponent({
  props: {
    name: { type: String },
  },
  setup({ name = "default" }, ctx) {
    const View = pathOr(rResponse.value.body, name, rResponse.value.body);
    return () => <View />;
  },
});

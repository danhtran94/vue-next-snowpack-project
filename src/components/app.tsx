import { defineComponent } from "vue";
import { RouteView } from "lib/curi-router-plugin/index";
import { jsx } from "utils/jsx";

import { Layout } from "src/components/layout";

export const App = defineComponent({
  setup(props, ctx) {
    return () => (
      <Layout title="Simple counter app">{() => <RouteView />}</Layout>
    );
  },
});

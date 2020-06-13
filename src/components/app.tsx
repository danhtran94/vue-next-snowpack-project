import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { jsx } from "src/utils/jsx";

import { useCurrentRouteLoc } from "src/utils/router/hooks";
import { Layout } from "src/components/layout";

export const App = defineComponent({
  setup(props, ctx) {
    const currentRoute = useCurrentRouteLoc();
    console.log(currentRoute.value);

    return () => (
      <Layout title="Simple counter app">{() => <RouterView />}</Layout>
    );
  },
});

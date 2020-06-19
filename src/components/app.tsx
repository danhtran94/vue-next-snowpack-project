import { defineComponent } from "vue";
import { jsx } from "utils/jsx";
import { i18n } from "lib/lingui-plugin/index";
import { RouteView } from "lib/curi-router-plugin/index";

import { Layout } from "src/components/layout";

export const App = defineComponent({
  setup(props, ctx) {
    return () => (
      <Layout title={i18n._("app_name")}>{() => <RouteView />}</Layout>
    );
  },
});

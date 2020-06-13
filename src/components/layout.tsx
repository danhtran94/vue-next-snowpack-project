import { defineComponent } from "vue";
import { jsx } from "src/utils/jsx";

import { LayoutHeader } from "src/components/layout-header";

export const Layout = defineComponent({
  props: {
    title: { type: String, required: true },
  },
  setup(props, ctx) {
    return () => (
      <div>
        <LayoutHeader>{() => props.title}</LayoutHeader>
        {ctx.slots.default()}
      </div>
    );
  },
});

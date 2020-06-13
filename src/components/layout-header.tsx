import { defineComponent } from "vue";
import { jsx } from "src/utils/jsx";

export const LayoutHeader = defineComponent({
  props: {},
  setup(props, ctx) {
    return () => (
      <header class="flex justify-center items-center h-12">
        {ctx.slots.default()}
      </header>
    );
  },
});

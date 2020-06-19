import { defineComponent, Fragment, ref } from "vue";
import { jsx } from "utils/jsx";
import { i18n } from "lib/lingui-plugin/index";

import { rNum, asyncInc } from "src/store/global";

export const PageHome = defineComponent({
  setup(props, ctx) {
    const lang = ref("en");

    const changeLang = () => {
      lang.value = lang.value === "en" ? "vi" : "en";
      i18n.activate(lang.value);
    };

    return () => (
      <Fragment>
        {i18n._("hello")}
        <div>Simple counter:</div>
        <div>Number: {rNum.value}</div>
        <button onClick={asyncInc}>increment</button>
        <br />
        <button onClick={changeLang}>{lang.value}</button>
      </Fragment>
    );
  },
});

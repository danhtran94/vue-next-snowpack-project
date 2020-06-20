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
        <div>
          <p>
            {i18n._("number")}: {rNum.value}
          </p>
          <button onClick={asyncInc}>{i18n._("click")}</button>
        </div>
        <button onClick={changeLang}>{lang.value}</button>
      </Fragment>
    );
  },
});

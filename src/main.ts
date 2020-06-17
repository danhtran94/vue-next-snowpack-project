import { createApp } from "vue";
import { setup } from "lib/curi-router-plugin/index";
import "./global.css";

import { router } from "src/route/index";
import { App } from "src/components/app";

const app = createApp(App);
setup(router);
app.mount("#root");

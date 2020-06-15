import { createApp } from "vue";
import "./global.css";

import { router } from "src/route/index";
import { App } from "src/components/app";

const app = createApp(App);
app.use(router);
app.mount("#root");

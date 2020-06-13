import { createApp } from "vue";
import "./global.css";

import { store } from "src/store/index";
import { router } from "src/route/index";
import { App } from "src/components/app";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#root");

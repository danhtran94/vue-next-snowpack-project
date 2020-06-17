import { prepareRoutes, createRouter } from "@curi/router";
import { browser } from "@hickory/browser";

import { PageHome } from "src/components/page-home";

let routes = prepareRoutes([
  {
    name: "Home",
    path: "",
    respond: () => {
      return { body: PageHome };
    },
  },
]);

export let router = createRouter(browser, routes, {
  sideEffects: [],
});

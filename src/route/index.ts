import { createRouter, createWebHashHistory } from "vue-router";

import { PageHome } from "src/components/page-home";

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: PageHome,
    },
  ],
});

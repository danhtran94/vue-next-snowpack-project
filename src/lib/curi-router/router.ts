import type { CuriRouter, Navigation, Response } from "@curi/types";
import { reactive, readonly, toRef, markRaw } from "vue";

const _navAndresp = reactive<{
  navigation: Navigation;
  response: Response;
}>({
  navigation: null,
  response: null,
});

export function setup(router: CuriRouter) {
  const _initial = router.current();
  _navAndresp.navigation = _initial.navigation;
  _navAndresp.response = _initial.response;

  return router.observe(({ response, navigation }) => {
    const resp = {
      ...response,
      body: markRaw(response.body),
    };

    _navAndresp.navigation = navigation;
    _navAndresp.response = resp;
  });
}

export const rNavigation = readonly(toRef(_navAndresp, "navigation"));
export const rResponse = readonly(toRef(_navAndresp, "response"));

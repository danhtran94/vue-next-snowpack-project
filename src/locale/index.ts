import lingui from "@lingui/core";

import vi from "./vi/messages";
import en from "./en/messages";

export function loadLocale() {
  lingui.i18n.load({
    en: en.messages,
    vi: vi.messages,
  });
  lingui.i18n.loadLocaleData({
    en: en.languageData,
    vi: vi.languageData,
  });
  lingui.i18n.activate("en");
}

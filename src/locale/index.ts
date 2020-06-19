import lingui from "@lingui/core";
import en from "./en/messages";
import vi from "./vi/messages";

export function loadLocale() {
  /**
   * Comment this block code while extracting locale
   **/
  lingui.i18n.load({
    en: en.messages,
    vi: vi.messages,
  });
  lingui.i18n.loadLocaleData({
    en: en.languageData,
    vi: vi.languageData,
  });
  lingui.i18n.activate("en");
  /**
   * End block
   */
}

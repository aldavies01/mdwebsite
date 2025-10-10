import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en/common.json";
import cy from "../locales/cy/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      cy: { translation: cy },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;

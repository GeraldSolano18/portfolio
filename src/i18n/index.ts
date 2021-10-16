import i18next, { i18n as i18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./translations/en/en.json";
import translationES from "./translations/es/es.json";

if (!localStorage.language) {
  localStorage.setItem("language", "en");
}
const createI18n = (): i18nInstance => {
  const i18n = i18next.use(initReactI18next).use(Backend).use(LanguageDetector);

  i18n.init({
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
  });

  return i18n;
};

export const i18n = createI18n();

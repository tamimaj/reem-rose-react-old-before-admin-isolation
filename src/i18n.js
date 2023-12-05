import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    // supportedLngs: ["en", "es", "ar"],
    supportedLngs: ["en"],
    debug: false,

    // Set default namespace
    defaultNS: "common",

    detection: {
      order: ["localStorage", "navigator"],
      cache: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
      useSuspense: true,
    },
  });

export default i18n;

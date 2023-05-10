import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import transalionEN from "./locale/en.json";
import transalionAR from "./locale/ar.json";
const resources = {
  en: {
    translation:  transalionEN
  },
  ar: {
    translation: transalionAR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
        useSuspense: false
    }
  });

  export default i18n;
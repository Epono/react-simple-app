import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DateTime } from "luxon";

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  //   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      },
    },
    resources: {
      en: {
        translation: {
          header: {
            welcome: "Hello World!",
            our_story: "Our story",
            membership: "Membership",
            write: "Write",
            sign_in: "Sign in",
            get_started: "Get started",
          },
          articles: {
            learn_more: "Learn more",
          },
        },
      },
      de: {
        translation: {
          header: {
            welcome: "Hallo Welt !",
            our_story: "Unsere Geschichte",
            membership: "Mitgliedschaft",
            write: "Schreiben",
            sign_in: "Einloggen",
            get_started: "Loslegen",
          },
          articles: {
            learn_more: "Mehr erfahren",
          },
        },
      },
      fr: {
        translation: {
          header: {
            welcome: "Allô le monde!",
            our_story: "Notre histoire",
            membership: "Abonnement",
            write: "Écrire",
            sign_in: "Se connecter",
            get_started: "Commencer",
          },
          articles: {
            learn_more: "En savoir plus",
          },
        },
      },
      it: {
        translation: {
          header: {
            welcome: "Ciao mondo!",
            our_story: "La nostra storia",
            membership: "Abbonamento",
            write: "Scrivere",
            sign_in: "Se Accesso",
            get_started: "Iniziare",
          },
          articles: {
            learn_more: "Per saperne di più",
          },
        },
      },
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

function changeDirection(direction) {
  document.body.setAttribute("dir", direction);

  document.getElementById("root").style.textAlign =
    direction === "rtl" ? "right" : "left";
}

i18n.on("languageChanged", function (lng) {
  localStorage.setItem("lng", lng);
  if (lng === "ar") changeDirection("rtl");
  else changeDirection("ltr");
});

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    whitelist: ["en", "ar"],
    interpolation: {
      escapeValue: false,
    },
    ns: ["translation"],
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
      addPath: `${process.env.PUBLIC_URL}/locales/add/{{lng}}/{{ns}}`,
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lng",
      checkWhitelist: true,
    },
    saveMissing: true,
    saveMissingTo: "all",
  });

export default i18n;

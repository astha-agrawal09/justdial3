import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: "Language",
        search_placeholder: "Search in Neemuch...",
        we_are_hiring: "We are Hiring",
        investor_relations: "Investor Relations",
        leads: "Leads",
        advertise: "Advertise",
        free_listing: "Free Listing",
        login: "Login / Sign Up"
      },
    },
    hi: {
      translation: {
        language: "भाषा",
        search_placeholder: "नीमच में खोजें...",
        we_are_hiring: "हम भर्ती कर रहे हैं",
        investor_relations: "निवेशक संबंध",
        leads: "लीड्स",
        advertise: "विज्ञापन दें",
        free_listing: "फ्री लिस्टिंग",
        login: "लॉगिन / साइन अप"
      },
    },
    fr: {
      translation: {
        language: "Langue",
        search_placeholder: "Rechercher à Neemuch...",
        we_are_hiring: "Nous recrutons",
        investor_relations: "Relations investisseurs",
        leads: "Pistes",
        advertise: "Faire de la publicité",
        free_listing: "Inscription gratuite",
        login: "Connexion / Inscription"
      },
    },
  },
  lng: "en", // default
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
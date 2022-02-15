import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './en/translationEN.json';
import translationKR from './kr/translationKR.json';

const resources = {
    en: {
        translation: translationEN
    },
    ko: {
        translation: translationKR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

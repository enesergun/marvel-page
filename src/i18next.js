import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'tr',
  lng: 'tr',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    tr: {
      translation: require('./constants/languages/tr.json'),
    },
    en: {
      translation: require('./constants/languages/en.json'),
    },
    fr: {
      translation: require('./constants/languages/fr.json'),
    },
  },
});

export default i18n;
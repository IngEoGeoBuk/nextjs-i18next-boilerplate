import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranEn from './files/en.json';
import tranKo from './files/ko.json';
import tranJp from './files/jp.json';

export const languages = [ 'en', 'ko', 'jp' ] as const;

export type Languages = typeof languages[number]; // 'en' | 'ko' | 'jp'

const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
  jp: { translation: tranJp },
}

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || userLanguage || 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n;
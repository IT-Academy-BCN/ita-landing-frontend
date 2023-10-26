import i18next from 'i18next';
import catala from "../translation/languages/catala.json";
import english from "../translation/languages/english.json";
import espanol from "../translation/languages/espanol.json";
export const defaultNS = 'ns1';
export const fallbackNS = 'fallback';

i18next.init({
  debug: true,
  fallbackLng: 'ca',
  defaultNS,
  fallbackNS,
  resources: {
    ca: {
      ns1: catala
    },
    es: {
      ns1: espanol
    },
    en: {
      ns1: english
    }
  },
});

export default i18next;
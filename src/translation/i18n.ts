import i18next from 'i18next';
import catala from "../translation/languages/catala.json";
import english from "../translation/languages/english.json";
import espanol from "../translation/languages/espanol.json";
export const defaultNS = 'ns1';
export const fallbackNS = 'fallback';

i18next.init({
  debug: true,
  fallbackLng: 'catala',
  defaultNS,
  fallbackNS,
  resources: {
    catala: {
      ns1: catala
    },
    espanol: {
      ns1: espanol
    },
    english: {
      ns1: english
    }
  },
});

export default i18next;
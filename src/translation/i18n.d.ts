import catala from "../translation/languages/catala.json";
import english from "../translation/languages/english.json";
import espanol from "../translation/languages/espanol.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ca";
    resources: {
      ca: typeof catala;
      es: typeof espanol;
      en: typeof english;
    };
  }
}
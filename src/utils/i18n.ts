import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en.json';
import pt from './lang/pt.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // compatibilidade de versões para react-native-cli e expo
  lng: 'pt', // linguagem inical,
  resources: {
    //arquivos de traduções
    en,
    pt,
  },
});

export default i18n;

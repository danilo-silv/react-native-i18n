import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from './lang/enUS.json';
import ptBR from './lang/ptBR.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // compatibilidade de versões para react-native-cli e expo
  lng: 'en', // linguagem inical,
  resources: {
    //arquivos de traduções
    enUS,
    ptBR,
  },
});

export default i18n;

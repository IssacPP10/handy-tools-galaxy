import { create } from 'zustand';
import { translations } from './translations';

type Language = 'en' | 'es';

interface I18nStore {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const useI18n = create<I18nStore>((set, get) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
  t: (key: string) => {
    const { language } = get();
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value?.[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }
    
    return value;
  },
}));
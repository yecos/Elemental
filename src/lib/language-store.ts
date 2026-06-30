"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language, Dictionary } from "./i18n";
import { dictionary } from "./i18n";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: "es",
      setLanguage: (lang) => set({ language: lang }),
      toggle: () =>
        set((state) => ({ language: state.language === "es" ? "en" : "es" })),
    }),
    {
      name: "elemental-language",
      partialize: (state) => ({ language: state.language }),
    }
  )
);

/**
 * Hook that returns the dictionary for the current language.
 * Components using this re-render when the language changes.
 */
export function useT(): Dictionary {
  const language = useLanguage((s) => s.language);
  return dictionary[language];
}

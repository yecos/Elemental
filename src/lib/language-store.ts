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
      setLanguage: (lang) => {
        set({ language: lang });
        // Update <html lang> for accessibility + SEO
        if (typeof document !== "undefined") {
          document.documentElement.lang = lang === "es" ? "es" : "en";
        }
      },
      toggle: () =>
        set((state) => {
          const next = state.language === "es" ? "en" : "es";
          if (typeof document !== "undefined") {
            document.documentElement.lang = next === "es" ? "es" : "en";
          }
          return { language: next };
        }),
    }),
    {
      name: "elemental-language",
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (state) => {
        // Sync <html lang> when state is rehydrated from localStorage
        if (state && typeof document !== "undefined") {
          document.documentElement.lang =
            state.language === "es" ? "es" : "en";
        }
      },
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

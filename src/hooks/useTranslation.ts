import { useSyncExternalStore } from "react";
import { useLanguageStore, Language } from "@/store/language.store";
import enTranslations from "@/core/i18n/en/common.json";
import hiTranslations from "@/core/i18n/hi/common.json";

const translations: Record<Language, Record<string, unknown>> = {
  en: enTranslations as Record<string, unknown>,
  hi: hiTranslations as Record<string, unknown>,
};

const emptySubscribe = () => () => {};

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  
  // Guard against hydration mismatch (Next.js SSR/Hydration)
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Default to English translations during hydration (server/first client render)
  const activeLanguage = mounted ? language : "en";
  const activeDict = translations[activeLanguage];

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: unknown = activeDict;

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        // Fallback to English dictionary if key missing in active translation
        let fallback: unknown = translations.en;
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = (fallback as Record<string, unknown>)[fKey];
          } else {
            return path; // Return raw path if key is completely missing
          }
        }
        return typeof fallback === "string" ? fallback : path;
      }
    }

    return typeof current === "string" ? current : path;
  };

  return { t, language: activeLanguage, setLanguage, mounted };
}

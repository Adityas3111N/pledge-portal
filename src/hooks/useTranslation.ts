import { useState, useEffect } from "react";
import { useLanguageStore, Language } from "@/store/language.store";
import enTranslations from "@/core/i18n/en/common.json";
import hiTranslations from "@/core/i18n/hi/common.json";

const translations: Record<Language, any> = {
  en: enTranslations,
  hi: hiTranslations,
};

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  
  // Guard against hydration mismatch (Next.js SSR/Hydration)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to English translations during hydration (server/first client render)
  const activeLanguage = mounted ? language : "en";
  const activeDict = translations[activeLanguage];

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = activeDict;

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English dictionary if key missing in active translation
        let fallback: any = translations.en;
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey];
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

import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

interface UseFormPersistOptions<TFieldValues extends Record<string, any>> {
  storageKey: string;
  exclude?: (keyof TFieldValues)[];
}

export function useFormPersist<TFieldValues extends Record<string, any>>(
  form: UseFormReturn<TFieldValues>,
  { storageKey, exclude = [] }: UseFormPersistOptions<TFieldValues>
) {
  const { watch, setValue } = form;
  const watchedValues = watch();

  // Load from local storage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        Object.keys(parsed).forEach((key) => {
          if (!exclude.includes(key as keyof TFieldValues)) {
            setValue(key as any, parsed[key], { shouldValidate: true, shouldDirty: true });
          }
        });
      } catch (e) {
        console.error("Failed to parse persisted form data", e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, storageKey]); 

  // Save to local storage on change with a debounce
  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeout = setTimeout(() => {
      const dataToSave = { ...watchedValues };
      exclude.forEach((key) => {
        delete dataToSave[key as keyof typeof dataToSave];
      });
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    }, 500); // 500ms debounce

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedValues, storageKey]); 
}

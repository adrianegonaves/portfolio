"use client";

import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import {
  getLocaleFromPathname,
  replaceLocaleInPath,
  type AppLocale,
} from "@/i18n/locales";

const LOCALE_LABELS: Record<AppLocale, string> = {
  pt: "PT",
  "pt-BR": "BR",
  en: "EN",
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value as AppLocale;
    router.push(replaceLocaleInPath(pathname, next));
  };

  return (
    <label className="flex h-9 items-center gap-2 rounded-md bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary/90">
      <Languages className="h-4 w-4 shrink-0" aria-hidden />
      <select
        value={currentLocale}
        onChange={onChange}
        className="cursor-pointer bg-transparent outline-none"
        aria-label="Idioma / Language"
      >
        {(Object.keys(LOCALE_LABELS) as AppLocale[]).map((code) => (
          <option key={code} value={code}>
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
    </label>
  );
}

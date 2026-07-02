"use client";

import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/en") ? "en" : "pt";

  const changeLanguage = () => {
    const newLocale = currentLocale === "pt" ? "en" : "pt";

    const newPath = pathname.replace(/^\/(pt|en)/, `/${newLocale}`);

    router.push(newPath);
  };

  return (
    <button
      onClick={changeLanguage}
      className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 hover:bg-secondary-foreground text-text-inverse"
    >
      <Languages className="h-4 w-4" />
      {currentLocale === "pt" ? "EN" : "PT"}
    </button>
  );
}
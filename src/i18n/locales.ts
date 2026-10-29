export const locales = ["pt", "pt-BR", "en"] as const;

export type AppLocale = (typeof locales)[number];

export function getLocaleFromPathname(pathname: string): AppLocale {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/pt-BR")) return "pt-BR";
  if (pathname.startsWith("/pt")) return "pt";
  return "pt";
}

export function replaceLocaleInPath(pathname: string, locale: AppLocale): string {
  const stripped = pathname.replace(/^\/(pt-BR|pt|en)(?=\/|$)/, "");
  return `/${locale}${stripped || ""}`;
}

export function openGraphLocale(locale: AppLocale): string {
  if (locale === "pt") return "pt_PT";
  if (locale === "pt-BR") return "pt_BR";
  return "en_US";
}

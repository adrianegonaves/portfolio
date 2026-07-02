import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const currentLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  return {
    locale: currentLocale,
    messages: (
      await import(`../messages/${currentLocale}.json`)
    ).default,
  };
});
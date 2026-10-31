import type { Metadata } from "next";
import "../globals.css";

import { IBM_Plex_Sans } from "next/font/google";
import { SiteMenu } from "@/components/layout/site-menu";
import { Providers } from "@/components/providers";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { openGraphLocale } from "@/i18n/locales";
import { siteConfig } from "@/content/site";
import type { AppLocale } from "@/i18n/locales";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: openGraphLocale(locale as AppLocale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <html
      lang={locale === "pt-BR" ? "pt-BR" : locale}
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="w-full min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <SiteMenu />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border px-4 py-8 text-center sm:px-8">
              <p className="text-xs text-muted-foreground sm:text-sm">
                © {new Date().getFullYear()} {siteConfig.name}. {t("copyright")}{" "}
                <span className="text-primary" aria-hidden>
                  ♥
                </span>
              </p>
            </footer>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

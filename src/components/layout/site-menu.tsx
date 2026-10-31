"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useTranslations } from "next-intl";
import { section } from "@/lib/section-classes";

const NAV_ITEMS = [
  { href: "#about", key: "about" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#contact", key: "contact" as const },
];

export function SiteMenu() {
  const t = useTranslations("SiteMenu");
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/60 bg-sidebar/90 backdrop-blur-md">
      <div className={`${section.container} flex items-center justify-between py-3 sm:py-4`}>
        <a
          href="#hero"
          className="shrink-0 text-xl font-bold tracking-tight"
          onClick={closeMobile}
        >
          <span className="text-foreground">A</span>
          <span className="text-primary">G</span>
          <span className="text-primary">.</span>
        </a>

        <nav
          className="hidden md:flex items-center gap-6"
          aria-label={t("mainNav")}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <Button
            asChild
            className="hidden h-9 shrink-0 rounded-full px-5 sm:inline-flex"
          >
            <a href="#contact">{t("letsTalk")}</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="md:hidden absolute left-0 right-0 top-full border-b border-border bg-sidebar px-4 py-4 shadow-lg"
        >
          <nav className="flex flex-col gap-3" aria-label={t("mainNav")}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                onClick={closeMobile}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center gap-2 border-t border-border pt-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Button asChild className="h-9 w-full rounded-full">
              <a href="#contact" onClick={closeMobile}>
                {t("letsTalk")}
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

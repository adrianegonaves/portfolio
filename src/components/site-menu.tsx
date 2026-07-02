"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";

export function SiteMenu() {
  const t = useTranslations("SiteMenu");
  return (
    <div className="w-full flex justify-center text-text-primary">
      <div className="w-full flex items-center justify-between px-8 py-4 bg-sidebar">
        <div className="text-text-secondary font-semibold tracking-wide">
          Adriane Gonçalves
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">{t("about")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">{t("projects")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">{t("experience")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">{t("contact")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <LanguageSwitcher/>
          <ThemeToggle/>
          <Button className="bg-primary hover:bg-primary text-text-inverse rounded-md px-4 py-5">
           {t("downloadCv")}
          </Button>
        </div>
      </div>
    </div>
  );
}

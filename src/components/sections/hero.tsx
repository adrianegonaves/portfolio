"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight} from "lucide-react";
import { siteConfig } from "@/content/site";
import { section } from "@/lib/section-classes";

export default function Hero() {
  const t = useTranslations("Home");

  return (
    <section
      id="hero"
      className={`hero-split ${section.scroll} overflow-hidden bg-background pb-16 pt-10 sm:pb-20 sm:pt-12 md:pt-14`}
    >
      <div className={`${section.container} grid items-center gap-10 lg:grid-cols-2 lg:gap-12`}>
        <div className="order-2 flex flex-col lg:order-1">
          <p className="text-lg font-medium text-muted-foreground sm:text-xl">
            {t("hiIm")}{" "}
            <span className="relative inline-block text-foreground">
              {t("hiImEmphasis")}
              <svg
                className="absolute -bottom-1 left-0 w-full text-primary"
                viewBox="0 0 120 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 6 C30 2, 50 8, 118 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-foreground">{t("nameFirst")}</span>{" "}
            <span className="text-primary">{t("nameLast")}</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-muted-foreground sm:text-xl">
            {t("roleTitle")}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("heroBio")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:bg-primary/90 sm:text-base"
            >
              {t("viewMyWork")}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted sm:text-base"
            >
              {t("linkedInCta")}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div
              className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-primary/12 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-accent/10 blur-3xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 shadow-lg shadow-primary/5">
              <Image
                src="/hero-illustration.jpeg"
                alt={t("heroImageAlt")}
                width={1024}
                height={1024}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 512px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

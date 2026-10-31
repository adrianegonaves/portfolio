import {
  BookOpen,
  Brain,
  Code2,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionUnderline } from "@/components/layout/section-underline";
import { coreSkills } from "@/content/skills";
import { section } from "@/lib/section-classes";

const TRAIT_KEYS = [
  "problemSolver",
  "detailOriented",
  "cleanCode",
  "alwaysLearning",
  "teamPlayer",
  "curiousMind",
] as const;

const TRAIT_ICONS = {
  problemSolver: Lightbulb,
  detailOriented: Target,
  cleanCode: Code2,
  alwaysLearning: BookOpen,
  teamPlayer: Users,
  curiousMind: Brain,
} as const;

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className={`${section.scroll} ${section.py} bg-background`}>
      <div className={section.container}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex w-full justify-center lg:order-1 lg:justify-start">
            <figure className="w-full max-w-sm rounded-2xl border-2 border-border bg-card p-3 shadow-lg shadow-primary/10 ring-1 ring-primary/20 sm:max-w-md sm:p-4 lg:max-w-lg">
              <div className="overflow-hidden rounded-xl border border-border/70 bg-muted/20">
                <Image
                  src="/about.jpeg"
                  alt={t("imageAlt")}
                  width={620}
                  height={740}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 448px, 512px"
                />
              </div>
            </figure>
          </div>

          <div className="order-1 flex flex-col gap-6 sm:gap-8 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <h2 className={section.title}>
                <span className="relative inline-block pb-1">
                  {t("headline")}
                  <SectionUnderline className="w-[4.5rem] sm:w-[5.5rem]" />
                </span>
              </h2>
              <p className="text-sm font-semibold text-foreground sm:text-base">
                {t("title")}
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("intro")}
              </p>
            </div>

            <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
              {TRAIT_KEYS.map((key) => {
                const Icon = TRAIT_ICONS[key];
                return (
                  <li key={key} className="flex items-center gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-foreground sm:text-base">
                      {t(`traits.${key}`)}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="space-y-3 border-t border-border pt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
                {t("skills.solid")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

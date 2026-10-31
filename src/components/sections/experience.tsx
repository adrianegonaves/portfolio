import { useTranslations } from "next-intl";
import { SectionUnderline } from "@/components/layout/section-underline";
import { experiences } from "@/content/experience";
import { section } from "@/lib/section-classes";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className={`${section.scroll} ${section.py} bg-background`}>
      <div className={`${section.container} grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12`}>
        <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {t("subtitle")}
          </span>
          <h2 className={section.title}>
            <span className="relative inline-block pb-1">
              {t("title")}
              <SectionUnderline className="w-16 sm:w-24" />
            </span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="relative ml-3 space-y-10 border-l border-border pl-6 md:ml-4 md:pl-10 lg:col-span-2 lg:space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative -ml-4 rounded-xl border border-transparent p-4 transition-all duration-300 hover:translate-x-1 hover:border-border/60 hover:bg-muted/30"
            >
              <div
                className={`absolute -left-[19px] top-6 h-3 w-3 rounded-full border-2 transition-all duration-300 md:-left-[27px] ${
                  exp.isCurrent
                    ? "border-emerald-400 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                    : "border-muted-foreground/40 bg-background group-hover:scale-125 group-hover:border-primary"
                }`}
              />

              {exp.isCurrent ? (
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-success/50 bg-success/80 px-2.5 py-0.5 text-xs font-medium text-white shadow-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                  {t("currentRoleBadge")}
                </div>
              ) : null}

              <p className="mb-1 text-xs font-medium text-muted-foreground">
                {t(exp.periodKey)}
              </p>

              <h3 className="mb-1 text-xl font-bold text-foreground transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                {t(exp.roleKey)}
              </h3>

              <p className="mb-3 text-sm font-medium text-primary">
                {t(exp.companyKey)}
                <span className="text-muted-foreground">
                  {" "}
                  • {t(exp.typeKey)}
                </span>
              </p>

              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {t(exp.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from "next-intl";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, siteConfig } from "@/content/site";
import { SectionUnderline } from "@/components/layout/section-underline";
import { section } from "@/lib/section-classes";

function ProjectMockup({ title }: { title: string }) {
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="rounded-2xl bg-muted/60 p-4 sm:p-5">
      <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
        <div className="flex h-7 items-center gap-1.5 border-b border-border bg-muted/50 px-3">
          <span className="h-2 w-2 rounded-full bg-primary/35" />
          <span className="h-2 w-2 rounded-full bg-primary/20" />
          <span className="h-2 w-2 rounded-full bg-primary/20" />
        </div>
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary/15 via-card to-primary/5">
          <span className="text-3xl font-bold text-primary/45 sm:text-4xl">{initials}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className={`${section.scroll} ${section.py} bg-muted/50`}>
      <div className={section.container}>
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className={section.title}>
            <span className="relative inline-block pb-1">
              {t("titleLead")}
              <SectionUnderline />
            </span>{" "}
            <span>{t("titleRest")}</span>
          </h2>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {t("viewMore")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => {
            const title = t(`${project.id}.title`);
            const link = project.demoUrl ?? project.repoUrl;

            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl border border-border/80 bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-primary/5 sm:p-6"
              >
                <ProjectMockup title={title} />

                <div className="mt-5 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
                      {title}
                    </h3>
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-0.5 shrink-0 text-primary transition-opacity hover:opacity-80"
                        aria-label={`${title} — ${t("github")}`}
                      >
                        <ExternalLink className="h-4 w-4" strokeWidth={2} />
                      </a>
                    ) : null}
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`${project.id}.description`)}
                  </p>

                  <p className="mt-auto pt-4 text-xs font-semibold text-primary sm:text-sm">
                    {project.techs.join(" · ")}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

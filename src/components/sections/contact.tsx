import { Briefcase, Code2, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { FieldComponent } from "@/components/contact/field-component";
import ContactIllustration from "@/components/contact/contact-illustration";
import { SectionUnderline } from "@/components/layout/section-underline";
import { siteConfig } from "@/content/site";
import { section } from "@/lib/section-classes";

const SOCIAL_LINKS = [
  { href: siteConfig.github, label: "GitHub", icon: Code2 },
  { href: siteConfig.linkedIn, label: "LinkedIn", icon: Briefcase },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
] as const;

const contactRowClass =
  "group inline-flex items-center gap-3 text-sm font-medium text-secondary-foreground transition-colors hover:text-primary sm:text-base";

const contactIconClass =
  "h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary";

const mapsQuery = encodeURIComponent(siteConfig.location);
const locationMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className={`${section.scroll} ${section.py} border-t border-border bg-muted/40`}
    >
      <div className={section.container}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-x-16">
          <div className="flex flex-col gap-6 sm:gap-7 lg:max-w-lg">
            <div className="space-y-3 sm:space-y-4">
              <h2 className={section.title}>
                <span className="relative inline-block pb-1">
                  {t("headlineLead")}
                  <SectionUnderline />
                </span>{" "}
                <span className="text-primary">{t("headlineAccent")}</span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("description")}
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-3.5">
              <li>
                <a href={`mailto:${siteConfig.email}`} className={contactRowClass}>
                  <Mail className={contactIconClass} strokeWidth={1.75} />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={locationMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactRowClass}
                >
                  <MapPin className={contactIconClass} strokeWidth={1.75} />
                  <span>{siteConfig.location}</span>
                </a>
              </li>
            </ul>

            <ContactIllustration />

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto") ? undefined : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <FieldComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

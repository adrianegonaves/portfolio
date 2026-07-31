import { Clock4, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { FieldComponent } from "./FieldComponent";


export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="bg-muted py-24 text-white">
            <div className="mx-auto max-w-7xl w-full px-8">
                <div className="grid lg:grid-cols-2 gap-16">

                    <div className="space-y-4 flex flex-col">
                        <div className="space-y-4">
                            <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                                {t("subtitle")}
                            </span>
                            <h2 className="text-4xl font-extrabold tracking-tight">
                                {t("title")}
                            </h2>
                            <p className="text-secondary-foreground leading-relaxed">
                                {t("description")}
                            </p>
                        </div>


                        <div className="flex flex-col  gap-4 space-y-4">
                            <div className="flex gap-4 items-center">
                                <Mail className=" text-primary" />
                                <div>
                                    <label>{t("email")}</label>
                                    <p className="text-secondary-foreground leading-relaxed">{t("e-mail")}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <MapPin className=" text-primary" />
                                <div>
                                    <label>{t("location")}</label>
                                    <p className="text-secondary-foreground leading-relaxed">{t("country")}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <FieldComponent />
                    </div>
                </div>
            </div>
        </section>
    );
}
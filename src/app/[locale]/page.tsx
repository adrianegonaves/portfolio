import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="hero-bg min-h-screen text-white flex items-center">
      <div className="mx-auto max-w-7xl w-full px-8">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-[#181824] px-4 py-2 text-sm text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              {t("badge")}
            </div>

            <h1 className="text-5xl font-extrabold leading-tight">
              {t("title").split(t("highlight"))[0]}
              <span className="text-primary">{t("highlight")}</span><br/>
              {t("title").split(t("highlight"))[1]}
            </h1>

            <p className="max-w-xl text-lg text-gray-400 leading-8">
              {t("description")}
            </p>

            <div className="flex gap-5">
              <Button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-6 rounded-xl">
                {t("viewProjects")} →
              </Button>

              <Button
                variant="outline"
                className="border-gray-700 bg-transparent hover:bg-white/5 px-8 py-6 rounded-xl"
              >
                {t("contact")}
              </Button>
            </div>
            <div className="flex gap-12 pt-10">
              <div>
                <h2 className="text-4xl font-bold"> {t("experienceValue")}</h2>
                <p className="text-gray-500 mt-2">{t("experienceLabel")}</p>
              </div>

              <div className="border-l border-gray-800 pl-12">
                <h2 className="text-4xl font-bold">{t("projectsValue")}</h2>
                <p className="text-gray-500 mt-2"> {t("projectsLabel")}</p>
              </div>
            </div>
          </section>
          <section className="flex justify-center">
            <div className="relative">
              <div className="absolute top-8 right-0 translate-x-11 rounded-xl bg-[#171724] border border-gray-700 px-5 py-3 shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {t("availability")}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden  bg-[#1b1b28] p-2">
                <Image
                  src="/adriane.jpg"
                  alt="Adriane"
                  width={400}
                  height={50}
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-0 rounded-2xl bg-[#171724] border border-gray-700 px-6 py-4 shadow-lg">
                <p className="text-xs text-gray-400"> {t("stackTitle")}</p>
                <p className="font-semibold">
                  {t("stackPrimary")}{" "}
                  <span className="text-indigo-400">
                    {" "}
                    {t("stackSecondary")}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

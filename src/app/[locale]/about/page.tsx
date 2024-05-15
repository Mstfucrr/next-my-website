import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
    const t = useTranslations("About");
    return (
        <div className="w-full flex flex-col gap-y-5 justify-center items-center">
            <h1 className="text-3xl font-bold text-red-400 underline">
                {t("title")}
            </h1>
            <p className="text-lg text-gray-500">{t("content")}</p>

            <Link title="Go back" href="/" locale="en">
                {t("backLink")}
            </Link>
        </div>
    );
};

export default About;

import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("About");
    return (
        <div className="w-full flex flex-col gap-y-5 justify-center items-center">
            <h1 className="text-3xl font-bold text-red-400 underline">
                {t("title")}
            </h1>
        </div>
    );
}

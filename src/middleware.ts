import createMiddleware from "next-intl/middleware";
import { Pathnames } from "next-intl/navigation";

const locales = ["en", "tr"];

const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/tr": "tr",
    "/en": "en",
    "/:path*": "en",
};

export default createMiddleware({
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false,
    pathnames: pathnames,
});

export const config = {
    matcher: ["/", "/(tr|en)/:path*"],
};

import {
    createLocalizedPathnamesNavigation,
    Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "tr"];
export const localePrefix = "always"; // Default
export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/tr": "tr",
    "/en": "en",
    "/:path*": "en",
    "/(tr|en)/:path*": "en",

    "/about": {
        en: "/about",
        tr: "/hakkimizda",
    },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

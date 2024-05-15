import { useMessages } from "next-intl";
import { Messages } from "../../../global";

export enum MenuPath {
    HOME = "/",
    ABOUT = "/about",
}

export interface RouteBase {
    path: MenuPath;
    title: string;
    locale: keyof Messages["navItems"];
}

const navbarData: RouteBase[] = [
    {
        path: MenuPath.HOME,
        title: "Home",
        locale: "home",
    },
    {
        path: MenuPath.ABOUT,
        title: "About",
        locale: "about",
    },
];

export default navbarData;

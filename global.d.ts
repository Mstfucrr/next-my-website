import en from "./locales/en.json";

export type Messages = typeof en;

declare global {
    interface IntlMessages extends Messages {}
}

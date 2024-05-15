import type { Metadata } from "next";
import "../../../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "Next.js Internationalization Example",
    description: "An example of internationalization in a Next.js app",
};

type LocaleLayoutProps = Readonly<{
    children: React.ReactNode;
    params: {
        locale: string;
    };
}>;

export default async function LocaleLayout({
    children,
    params: { locale },
}: LocaleLayoutProps) {
    const messages = await getMessages();

    return (
        // Warning: Extra attributes from the server: cz-shortcut-listen

        <html lang={locale}>
            <body cz-shortcut-listen="true">
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

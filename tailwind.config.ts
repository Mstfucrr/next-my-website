import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            size: {
                screen: "100vh",
            },
        },
        animation: {
            marquee: "marquee var(--duration) infinite linear",
        },
        keyframes: {
            marquee: {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
            },
            "marquee-vertical": {
                from: { transform: "translateY(0)" },
                to: { transform: "translateY(calc(-100% - var(--gap)))" },
            },
        },
        colors: ({ colors }) => ({
            primary: "#FF6363",
            secondary: {
                100: "#E2E2D5",
                200: "#888883",
            },
            transparent: "transparent",
            white: "#FFFFFF",
            black: "#000",
            dark: "#1D2144",

            // STANDARD
            inherit: colors.inherit,
            slate: colors.slate,
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
            gray: colors.gray,
            yellow: colors.yellow,

            // GRAY
            grey: {
                50: "#FAFAFA",
                100: "#F5F5F5",
                200: "#EEEEEE",
                300: "#E0E0E0",
                400: "#BDBDBD",
                500: "#9E9E9E",
                600: "#757575",
                700: "#616161",
                800: "#424242",
                900: "#212121",
            },
        }),
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries"),
    ],
};
export default config;

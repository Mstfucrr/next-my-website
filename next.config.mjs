import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true, // Hata oluştuğunda build işlemini durdurma
    },
    images: {
        unoptimized: true, // Resim optimizasyonunu kapatma (örneğin: resim kalitesi düşürme)
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true, // ESLint hatalarını görmezden gelme
    },
    reactStrictMode: false, // React Strict Mode'u kapatma
    experimental: {
        esmExternals: false, // ESM externals'ı kapatma
        // jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
    },
};

export default withNextIntl(nextConfig);

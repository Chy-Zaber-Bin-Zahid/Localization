import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'de', 'it'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
};

export default nextConfig;
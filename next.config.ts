import type { NextConfig } from 'next';
import nextTranslate from 'next-translate-plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextTranslate(nextConfig);
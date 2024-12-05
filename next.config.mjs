/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'dev.to',
        protocol: 'https',
      },
      {
        hostname: 'media2.dev.to',
        protocol: 'https',
      },
      {
        hostname: 'cdn.sanity.io',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;

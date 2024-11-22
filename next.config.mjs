/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
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
    ],
  },
};

export default nextConfig;

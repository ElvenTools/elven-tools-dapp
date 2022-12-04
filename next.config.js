/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      process: require.resolve('process/browser'),
    };
    return config;
  },
  reactStrictMode: false, // will be handled in following releases, when enabled there are problems in development
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_ELROND_API}/:path*`,
        destination: `${process.env.ELROND_CUSTOM_API}/:path*`,
      },
    ];
  },
  eslint: {
    dirs: ['components', 'config', 'hooks', 'pages', 'store', 'types', 'utils'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'nftstorage.link',
      'media.elrond.com',
      'devnet-media.elrond.com',
      'testnet-media.elrond.com',
    ],
  },
};
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    publicExcludes: ['!robots.txt', '!sitemap.xml', '!sitemap-0.xml'],
  },
});
module.exports = nextConfig;

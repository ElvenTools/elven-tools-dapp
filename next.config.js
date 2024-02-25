/** @type {import('next').NextConfig} */

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
  reactStrictMode: true,
  async rewrites() {
    if (!process.env.MULTIVERSX_PRIVATE_API) {
      return [];
    }
    return [
      {
        source: `${process.env.NEXT_PUBLIC_MULTIVERSX_API}/:path*`,
        destination: `${process.env.MULTIVERSX_CUSTOM_API}/:path*`,
        destination: `${process.env.MULTIVERSX_PRIVATE_API}/:path*`,
      },
    ];
  },
  eslint: {
    dirs: ['components', 'config', 'hooks', 'pages', 'store', 'types', 'utils'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.elrond.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.multiversx.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.nftstorage.link',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;

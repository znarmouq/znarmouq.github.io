/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  /* config options here */
  output: "export",
  // basePath: isProd? '' : '/portfolio',
  // assetPrefix: '/znarmouq.github.io/',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
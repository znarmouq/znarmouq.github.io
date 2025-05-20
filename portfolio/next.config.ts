/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  output: "export",
  // basePath: '/portfolio',
  // assetPrefix: '/znarmouq.github.io/',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
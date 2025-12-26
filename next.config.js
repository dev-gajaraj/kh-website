/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // unoptimized true is often needed for static export unless using a custom loader
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

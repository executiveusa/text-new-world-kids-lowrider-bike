/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
  },
};

module.exports = nextConfig;

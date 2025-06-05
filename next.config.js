/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wfyoung.vercel.app',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Enable static exports
  trailingSlash: true,
  // Production optimizations
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig 
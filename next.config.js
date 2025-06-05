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
  },
  // Enable static exports
  trailingSlash: true,
}

module.exports = nextConfig 
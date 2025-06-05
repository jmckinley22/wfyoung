/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
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
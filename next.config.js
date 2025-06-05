/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['wfyoung.vercel.app'],
    unoptimized: false,
  },
  // Enable static exports
  trailingSlash: true,
  // Disable server components for static export
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 
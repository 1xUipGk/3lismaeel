/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.googleapis.com', 
      'blogger.googleusercontent.com',
      '3lismaeel.xyz',
      '3lismaeel-hdp1aaqs4-1xuipgks-projects.vercel.app',
      'lh3.googleusercontent.com',
      'bp.blogspot.com'
    ],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  swcMinify: false,
  reactStrictMode: true,
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig

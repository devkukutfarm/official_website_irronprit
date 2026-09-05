import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'themes-themegoods.b-cdn.net',
      },
    ],
  },
}

export default nextConfig

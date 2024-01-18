/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailus.io'
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com'
          }
        ],
      },
}

module.exports = nextConfig


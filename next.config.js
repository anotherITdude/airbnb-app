/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        //port: '',
        pathname: '/api',
      },
    ],
  },
 
}

module.exports = nextConfig

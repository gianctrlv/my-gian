/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeshack.io',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
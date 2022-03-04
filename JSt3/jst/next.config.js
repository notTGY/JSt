/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  exportPathMap: async function() {
    return { '/': { page: '/' } }
  },
}

module.exports = nextConfig

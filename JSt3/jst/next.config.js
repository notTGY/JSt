/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  exportPathMap: async function() {
    return { 
      '/': { page: '/' },
      '/feedback': { page: '/feedback' },
    }
  },
}

module.exports = nextConfig

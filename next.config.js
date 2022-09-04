/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async() => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/compose/tweet',
        destination: '/home/?tweet=true',
        permanent: false
      },
      {
        source: '/i/newsletters',
        destination: '/home/?newsletters=true',
        permanent: false
      },
      {
        source: '/i/flow/convert_to_professional',
        destination: '/home/?professional=true',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zjkxlcyrnewqeabpnqqa.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/uap-reports-bucket/**'
      }
    ]
  }
}

module.exports = nextConfig

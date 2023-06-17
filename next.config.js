/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['nextblog.havenwork.com']
  }
}

module.exports = nextConfig

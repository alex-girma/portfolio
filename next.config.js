/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['openweathermap.org', 'jherr-pokemon.s3.us-west-1.amazonaws.com'],
  },
};

module.exports = nextConfig;

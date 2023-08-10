/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["en.martatorre.dev", "api.thegreenwebfoundation.org"],
    unoptimized: true,
  },
  // basePath: "/",
};

module.exports = nextConfig;

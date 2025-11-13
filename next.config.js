/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',        // static export for Cloudflare Pages
  images: { unoptimized: true },
};
module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',        // ⬅️ static HTML export
  images: { unoptimized: true },
};
module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Docker 部署优化
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
export default nextConfig;

/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true,
  }
};

module.exports = withSvgr(nextConfig);

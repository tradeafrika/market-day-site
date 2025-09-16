// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // EITHER use domains:
    // domains: ["placehold.co"],
    // OR remotePatterns (more flexible):
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

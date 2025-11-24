import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 NECESARIO PARA GITHUB PAGES
  images: {
    unoptimized: true, // 👈 NECESARIO PARA EXPORT
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;


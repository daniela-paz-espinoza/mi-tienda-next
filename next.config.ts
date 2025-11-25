import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // necesario para GitHub Pages
  basePath: "/mi-tienda-next",    // MUY IMPORTANTE
  assetPrefix: "/mi-tienda-next/", // MUY IMPORTANTE
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
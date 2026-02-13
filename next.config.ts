import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: (process.env.BUILD_OUTPUT as "standalone" | "export") || "standalone",
  images: {
    unoptimized: process.env.BUILD_OUTPUT === "export",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
};

export default nextConfig;

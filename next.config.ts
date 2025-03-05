import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Add ESLint configuration
  eslint: {
    // Don't run ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

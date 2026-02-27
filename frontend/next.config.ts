import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Removido serverExternalPackages para permitir que o bundler resolva as extensões internas do Clerk
};

export default nextConfig;

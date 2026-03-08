import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Switch to next-image-export-optimizer in Phase 4
  },
}

export default nextConfig

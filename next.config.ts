import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // keep the dev badge clear of the music and RSVP controls
  devIndicators: { position: "top-left" },
};

export default nextConfig;

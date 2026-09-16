import type { NextConfig } from "next";

// GitHub Pages serves plain files, so it cannot run Next's image optimizer or
// resolve extensionless routes. Opt into that shape only when exporting, and
// leave the default (optimized) build alone for Vercel and local dev.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  // keep the dev badge clear of the music and RSVP controls
  devIndicators: { position: "top-left" },
  ...(staticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
        basePath: process.env.PAGES_BASE_PATH || "",
      }
    : {}),
};

export default nextConfig;

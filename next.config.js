// const { loadEnvConfig } = require("@next/env");

// const projectDir = process.cwd();
// loadEnvConfig(projectDir);

/**
 * Default dotenv variables flow in Next.js doesn't support custom modes: staging, qa, etc.
 * Here we initialize our own custom dotenv-flow with dotenv-expand.
 * To change app environment use APP_ENV variable.
 */

/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: ["app-build-manifest.json"],
});

const nextConfig = withPWA({
  // next config
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
});
module.exports = nextConfig;

// // https://laros.io/how-to-get-the-current-url-with-nextjs-on-vercel
// dotenvExpand.expand({ parsed: { ...process.env } });

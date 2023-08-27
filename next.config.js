/** @type {import('next').NextConfig} */
/*const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  productionBrowserSourceMaps: true,
});*/

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
});

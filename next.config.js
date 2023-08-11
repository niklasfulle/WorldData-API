/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

/*module.exports = withPWA({
  productionBrowserSourceMaps: true,
});*/

module.exports = {
  productionBrowserSourceMaps: true,
};

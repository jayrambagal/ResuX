/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "raw.githubusercontent.com",
      "images.weserv.nl",
      "github.com",
    ],
  },
  trailingSlash: true,
  webpack: (config) => {
    // Setting resolve.alias to false tells webpack to ignore a module
    // https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

module.exports = nextConfig;

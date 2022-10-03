/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/abstracts")],
    prependData: `@import "abstracts.scss";`,
  },
};

module.exports = nextConfig;

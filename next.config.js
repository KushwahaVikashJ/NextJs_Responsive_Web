const { withPlugins } = require("next-compose-plugins")
const withLess = require("next-with-less")

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 500, 680, 1040, 2080, 2048, 3120],
    domains: ["localhost"],
  },
}

module.exports = withPlugins(
  [
    withLess({
      lessLoaderOptions: {},
    }),
  ],
  nextConfig
)

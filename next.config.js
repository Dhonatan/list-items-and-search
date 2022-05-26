const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    return config;
  },
  pageExtensions: [
    'tsx'
  ],
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
  // useFileSystemPublicRoutes: false,
}

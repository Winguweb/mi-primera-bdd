const { parsed: localEnv } = require('dotenv').config()
const withCSS = require('@zeit/next-css')
const webpack = require('webpack');

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        config.node = {fs: "empty"};
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,
        ]


    return config;
  },
  env: {
    API_URL: localEnv.API_URL
  }
})

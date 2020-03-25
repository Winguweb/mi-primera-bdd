require('dotenv').config()
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
    
    return config;
  },
  env: {
    API_URL: process.env.API_URL
  }
})

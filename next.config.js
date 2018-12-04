module.exports = require('@zeit/next-typescript')({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(yml|yaml)$/,
      use: [{ loader: 'json-loader' }, { loader: 'yaml-flat-loader' }],
    })
    return config
  },
})

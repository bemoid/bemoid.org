const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@api'] = path.resolve(`${__dirname}/api`)
    config.resolve.alias['@views'] = path.resolve(`${__dirname}/src/views`)
    config.resolve.alias['@assets'] = path.resolve(`${__dirname}/resources/assets`)
    config.resolve.alias['@components'] = path.resolve(`${__dirname}/src/components`)

    return config
  }
}

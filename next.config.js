const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@api'] = path.resolve(`${__dirname}/api`)
    config.resolve.alias['@src'] = path.resolve(`${__dirname}/src`)
    config.resolve.alias['@assets'] = path.resolve(`${__dirname}/resources/assets`)

    return config
  }
}

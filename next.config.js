const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@api'] = path.resolve(`${__dirname}/api`)
    config.resolve.alias['@src'] = path.resolve(`${__dirname}/src`)
    config.resolve.alias['@resources'] = path.resolve(`${__dirname}/resources`)

    return config
  }
}

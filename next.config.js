const path = require('path')

require('dotenv').config()

module.exports = {
  env: {
    ALGOLIA_INDEX_PREFIX: process.env.ALGOLIA_INDEX_PREFIX,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
  },
  webpack: (config) => {
    config.resolve.alias['@src'] = path.resolve(`${__dirname}/src`)
    config.resolve.alias['@query'] = path.resolve(`${__dirname}/query`)
    config.resolve.alias['@resources'] = path.resolve(`${__dirname}/resources`)

    return config
  }
}

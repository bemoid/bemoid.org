const { readFile, readFiles } = require('../lib/io')

/**
 * Gets data collection of all Bemoid's api.
 *
 * @returns object[]
 */
exports.getAllApi = async () => {
  const data = await readFiles('api/*')

  return data
}

/**
 * Gets data of a single Bemoid's api.
 *
 * @param {string} type
 * @param {string} slug
 * @returns object
 */
exports.getApi = async (type, slug) => {
  const data = await readFile(`api/${type}-${slug}`)

  return data
}

/**
 * Gets data collection of all Bemoid's variables.
 *
 * @returns object[]
 */
exports.getVariablesApi = async () => {
  const data = await getApi('variable', '*')

  return data
}

/**
 * Gets data collection of all Bemoid's mixins.
 *
 * @returns object[]
 */
exports.getMixinsApi = async () => {
  const data = await getApi('mixin', '*')

  return data
}

/**
 * Gets data collection of all Bemoid's functions.
 *
 * @returns object[]
 */
exports.getFunctionsApi = async () => {
  const data = await getApi('function', '*')

  return data
}

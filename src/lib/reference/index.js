const { readFile, readFiles } = require('../utils/io')

/**
 * Gets data collection of all Bemoid's API reference.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllReference = async (version) => {
  const data = await readFiles(`${version}/reference/*`)

  return data
}

/**
 * Gets data of a single Bemoid's API reference.
 *
 * @param {string} version
 * @param {string} type
 * @param {string} slug
 * @returns object
 */
exports.getReference = async (version, type, slug) => {
  const data = await readFile(`${version}/reference/${type}-${slug}`)

  return data
}

/**
 * Gets data collection of all Bemoid's variables.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllVariablesReference = async (version) => {
  const data = await exports.getReference(version, 'variable', '*')

  return data
}

/**
 * Gets data collection of all Bemoid's mixins.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllMixinsReference = async (version) => {
  const data = await exports.getReference(version, 'mixin', '*')

  return data
}

/**
 * Gets data collection of all Bemoid's functions.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllFunctionsReference = async (version) => {
  const data = await exports.getReference(version, 'function', '*')

  return data
}

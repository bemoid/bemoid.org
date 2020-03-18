const { readFile, readFiles } = require('../lib/io')

/**
 * Gets data collection of all documentation pages.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllDocs = async (version) => {
  const data = await readFiles(`${version}/docs/*`)

  return data
}

/**
 * Gets data of a single documentation.
 *
 * @param {string} version
 * @param {string} slug
 * @returns object
 */
exports.getDocs = async (version, slug) => {
  const data = await readFile(`${version}/docs/${slug}`)

  return data
}

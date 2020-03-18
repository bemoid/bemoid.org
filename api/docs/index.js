const { readFile, readFiles } = require('../lib/io')

/**
 * Gets data collection of all documentation pages.
 *
 * @returns object[]
 */
exports.getAllDocs = async () => {
  const data = await readFiles('docs/*')

  return data
}

/**
 * Gets data of a single documentation.
 *
 * @param {string} slug
 * @returns object
 */
exports.getDocs = async (slug) => {
  const data = await readFile(`docs/${slug}`)

  return data
}

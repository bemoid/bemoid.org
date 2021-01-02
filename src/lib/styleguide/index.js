const { readFile, readFiles } = require('@/lib/utils/io')

/**
 * Gets data collection of all styleguide pages.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllStyleguides = async (version) => {
  const data = await readFiles(`${version}/styleguide/*`)

  return data
}

/**
 * Gets data of a single styleguide.
 *
 * @param {string} version
 * @param {string} slug
 * @returns object
 */
exports.getStyleguide = async (version, slug) => {
  const data = await readFile(`${version}/styleguide/${slug}`)

  return data
}

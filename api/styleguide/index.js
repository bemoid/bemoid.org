const { readFile, readFiles } = require('../lib/io')

/**
 * Gets data collection of all styleguide pages.
 *
 * @returns object[]
 */
exports.getAllStyleguides = async () => {
  const data = await readFiles('styleguide/*')

  return data
}

/**
 * Gets data of a single styleguide.
 *
 * @param {string} slug
 * @returns object
 */
exports.getStyleguide = async (slug) => {
  const data = await readFile(`styleguide/${slug}`)

  return data
}

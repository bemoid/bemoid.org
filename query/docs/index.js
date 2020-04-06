const { readFile, readFiles } = require('../lib/io')
const { groupBy, sortBy } = require('../lib/utils/array')

/**
 * Gets data collection of all documentation pages.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllDocs = async (version) => {
  const data = await readFiles(`${version}/docs/*`)

  return sortBy(data, (item) => item.attributes.title)
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

/**
 * Gets data collection of all documentation pages.
 *
 * @param {string} version
 * @returns object[]
 */
exports.getAllDocsByGroup = async (version) => {
  const data = await exports.getAllDocs(version)

  const groups = groupBy(data, (item) => item.attributes.group)

  return sortBy(groups, (group) => group.name)
}

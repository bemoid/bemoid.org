const fg = require('fast-glob')
const fse = require('fs-extra')

const { paths } = require('../../app.config')

/**
 * Gets data collection of all documentation pages.
 *
 * @returns object[]
 */
exports.getAllDocs = async () => {
  try {
    const files = await fg(`${paths.data}/docs/*.json`)

    return files.map((file) => {
      const content = fse.readJsonSync(file)

      return content
    })
  } catch (error) {
    throw error
  }
}

/**
 * Gets data of a single documentation.
 *
 * @param {string} slug
 * @returns object
 */
exports.getDocs = async (slug) => {
  try {
    const data = await fse.readJson(`${paths.data}/docs/${slug}.json`)

    return data
  } catch (error) {
    throw error
  }
}

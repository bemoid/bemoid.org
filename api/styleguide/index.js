const fg = require('fast-glob')
const fse = require('fs-extra')

const { paths } = require('../../app.config')

/**
 * Gets data collection of all styleguide pages.
 *
 * @returns object[]
 */
exports.getAllStyleguides = async () => {
  try {
    const files = await fg(`${paths.data}/styleguide/*.json`)

    return files.map((file) => {
      const content = fse.readJsonSync(file)

      return content
    })
  } catch (error) {
    throw error
  }
}

/**
 * Gets data of a single styleguide.
 *
 * @param {string} slug
 * @returns object
 */
exports.getStyleguide = async (slug) => {
  try {
    const data = await fse.readJson(`${paths.data}/styleguide/${slug}.json`)

    return data
  } catch (error) {
    throw error
  }
}

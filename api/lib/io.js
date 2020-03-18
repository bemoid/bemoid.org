const fg = require('fast-glob')
const fse = require('fs-extra')

const { paths } = require('../../app.config')

/**
 * Gets data collection of all Bemoid's api.
 *
 * @param {string} path
 * @returns object[]
 */
exports.readFiles = async (path) => {
  try {
    const files = await fg(`${paths.data}/${path}.json`)

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
 * @param {string} path
 * @returns object
 */
exports.readFile = async (path) => {
  try {
    const data = await fse.readJson(`${paths.data}/${path}.json`)

    return data
  } catch (error) {
    throw error
  }
}

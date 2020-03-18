const fs = require('fs')
const fg = require('fast-glob')
const fse = require('fs-extra')

const { paths } = require('../../app.config')

/**
 * Gets collection of contents of files in the path.
 *
 * @param {string} path
 * @returns object[]
 */
exports.readFiles = async (path) => {
  const files = await fg(`${paths.data}/${path}.json`)

  return files.map((file) => {
    const content = fse.readJsonSync(file)

    return content
  })
}

/**
 * Gets content of the file.
 *
 * @param {string} path
 * @returns object
 */
exports.readFile = async (path) => {
  const data = await fse.readJson(`${paths.data}/${path}.json`)

  return data
}

/**
 * Gets data collection of all Bemoid's api.
 *
 * @param {string} path
 * @returns object[]
 */
exports.readDirectory = async (path) => {
  const dirpath = (path) ? `${paths.data}/${path}` : `${paths.data}`

  const files = await fs.readdirSync(dirpath, { withFileTypes: true })

  return files
}

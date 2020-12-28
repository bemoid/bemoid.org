import fs from 'fs'
import fg from 'fast-glob'
import fse from 'fs-extra'

/**
 * Gets collection of contents of files in the path.
 *
 * @param {string} path
 * @returns object[]
 */
export const readFiles = async (path: string) => {
  const files = await fg(path)

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
export const readFile = async (path: string) => {
  const data = await fse.readJson(path)

  return data
}

/**
 * Gets data collection of all Bemoid's api.
 *
 * @param {string} path
 * @returns object[]
 */
export const readDirectory = async (path: string) => {
  const files = await fs.readdirSync(path, { withFileTypes: true })

  return files
}

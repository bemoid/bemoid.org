const { readDirectory } = require('../lib/io')

/**
 * Gets collection of Bemoid's versions.
 *
 * @returns string[]
 */
exports.getVersions = async () => {
  const data = await readDirectory()

  return data
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

import { paths } from 'app.config'
import { readDirectory } from 'query/lib/io'

/**
 * Gets collection of Bemoid's versions.
 *
 * @returns string[]
 */
export const getVersions = async (): Promise<string[]> => {
  const data = await readDirectory(paths.data)

  return data
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

/**
 * Gets number of Bemoid's latest version.
 *
 * @returns string
 */
export const getLatestVersion = async (): Promise<string> => {
  const versions = (await getVersions()).map(Number)

  return Math.max(...versions).toString()
}

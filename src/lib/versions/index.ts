import { paths } from 'app.config'
import { readDirectory } from '@/lib/utils/io'

/**
 * Gets collection of Bemoid's versions.
 */
export const getVersions = async (): Promise<string[]> => {
  const data = await readDirectory(paths.data)

  return data
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

/**
 * Gets number of Bemoid's latest version.
 */
export const getLatestVersion = async (): Promise<string> => {
  const versions = (await getVersions()).map(Number)

  return Math.max(...versions).toString()
}

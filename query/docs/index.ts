import { paths } from 'app.config'
import { readFile, readFiles } from 'query/lib/io'
import { groupBy, sortBy } from 'query/lib/utils/array'

import { DocsGroupInterface, DocsInterface } from 'interfaces/docs'

/**
 * Gets data collection of all documentation pages.
 *
 * @param {string} version
 * @returns object[]
 */
export const getAllDocs = async (version: string): Promise<[DocsInterface]> => {
  const data = await readFiles(`${paths.data}/${version}/docs/*.json`)

  return sortBy(data, (item) => item.attributes.title)
}

/**
 * Gets data collection of all documentation pages.
 *
 * @param {string} version
 * @returns object[]
 */
export const getAllDocsByGroup = async (
  version: string
): Promise<[DocsGroupInterface]> => {
  const data = await getAllDocs(version)

  const groups = groupBy(data, (item) => item.attributes.group)

  return sortBy(groups, (group) => group.name)
}

/**
 * Gets data of a single documentation.
 *
 * @param {string} version
 * @param {string} slug
 * @returns object
 */
export const getDocs = async (
  version: string,
  slug: string
): Promise<DocsInterface> => {
  const data = await readFile(`${paths.data}/${version}/docs/${slug}.json`)

  return data
}

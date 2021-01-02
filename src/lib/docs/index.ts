import { paths } from 'app.config'
import { readFile, readFiles } from '@/lib/utils/io'
import { groupBy, sortBy } from '@/lib/utils/array'

import type { DocsGroupInterface, DocsInterface } from '@/interfaces/docs'

/**
 * Gets data collection of all documentation pages.
 */
export const getAllDocs = async (version: string): Promise<DocsInterface[]> => {
  const data = await readFiles(`${paths.data}/${version}/docs/*.json`)

  return sortBy<DocsInterface>(data, (item) => item.attributes.title)
}

/**
 * Gets data collection of all documentation pages.
 */
export const getAllDocsByGroup = async (
  version: string
): Promise<DocsGroupInterface[]> => {
  const data = await getAllDocs(version)

  const groups = groupBy<DocsInterface, DocsGroupInterface>(
    data,
    (item) => item.attributes.group
  )

  return sortBy<DocsGroupInterface>(groups, (group) => group.name)
}

/**
 * Gets data of a single documentation.
 */
export const getDocs = async (
  version: string,
  slug: string
): Promise<DocsInterface> => {
  const data = await readFile(`${paths.data}/${version}/docs/${slug}.json`)

  return data
}

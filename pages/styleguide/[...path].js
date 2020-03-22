import { StyleguideSingleView } from '@src/views/styleguide/single'

import { getVersions, getStyleguide, getAllStyleguides } from '@api'

export async function getStaticProps ({ params }) {
  const [version, slug] = params.path

  const versions = await getVersions()
  const styleguide = await getStyleguide(version, slug)

  return {
    props: {
      context: {
        versions,
        currentVersion: version,
      },
      title: styleguide.header,
      description: styleguide.description,
    }
  }
}

export async function getStaticPaths () {
  let paths = []
  const versions = await getVersions()

  for (const version of versions) {
    const styleguides = await getAllStyleguides(version)

    paths = paths.concat(styleguides.map((item) => ({
      params: {
        path: [version, item.slug]
      }
    })))
  }

  return { paths, fallback: false }
}

export default StyleguideSingleView

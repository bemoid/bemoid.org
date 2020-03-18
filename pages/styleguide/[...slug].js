import { StyleguideSingleView } from '@views/styleguide/single'

import { getVersions, getStyleguide, getAllStyleguides } from '@api'

export async function getStaticProps ({ params }) {
  const [version, slug] = params.slug

  const styleguide = await getStyleguide(version, slug)

  return {
    props: {
      ...styleguide
    }
  }
}

export async function getStaticPaths () {
  let paths = []
  const versions = await getVersions()

  for (let i = 0; i < versions.length; i++) {
    const version = versions[i]
    const styleguides = await getAllStyleguides(version)

    paths = paths.concat(styleguides.map((item) => ({
      params: {
        slug: [version, item.slug]
      }
    })))
  }

  return { paths, fallback: false }
}

export default StyleguideSingleView

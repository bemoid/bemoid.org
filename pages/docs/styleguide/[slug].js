import { StyleguideSingleView } from '@views/styleguide/single'

import { getStyleguide, getAllStyleguides } from '@api'

export async function getStaticProps ({ params }) {
  const styleguide = await getStyleguide(params.slug)

  return {
    props: {
      ...styleguide
    }
  }
}

export async function getStaticPaths () {
  const styleguides = await getAllStyleguides()

  const paths = styleguides.map((item) => ({
    params: { slug: item.slug }
  }))

  return { paths, fallback: false }
}

export default StyleguideSingleView

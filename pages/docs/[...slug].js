import { DocsSingleView } from '@views/docs/single'

import { getVersions, getDocs, getAllDocs } from '@api'

export async function getStaticProps ({ params }) {
  const [version, slug] = params.slug

  const docs = await getDocs(version, slug)

  return {
    props: {
      ...docs
    }
  }
}

export async function getStaticPaths () {
  let paths = []
  const versions = await getVersions()

  for (const version of versions) {
    const docs = await getAllDocs(version)

    paths = paths.concat(docs.map((item) => ({
      params: {
        slug: [version, item.attributes.slug]
      }
    })))
  }

  return { paths, fallback: false }
}

export default DocsSingleView

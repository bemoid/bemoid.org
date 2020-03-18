import { ReferenceSingleView } from '@views/reference/single'

import { getVersions, getReference, getAllReference } from '@api'

export async function getStaticProps ({ params }) {
  const [version, type, slug] = params.slug

  const reference = await getReference(version, type, slug)

  return {
    props: {
      ...reference
    }
  }
}

export async function getStaticPaths () {
  let paths = []
  const versions = await getVersions()

  for (let i = 0; i < versions.length; i++) {
    const version = versions[i]
    const references = await getAllReference(version)

    paths = paths.concat(references.map((item) => ({
      params: {
        slug: [version, item.context.type, item.context.name],
      }
    })))
  }

  return { paths, fallback: false }
}

export default ReferenceSingleView

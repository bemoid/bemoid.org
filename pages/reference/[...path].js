import { ReferenceSingleView } from '@src/views/reference/single'

import { getVersions, getReference, getAllReference } from '@api'

export async function getStaticProps ({ params }) {
  const [version, type, slug] = params.path

  const versions = await getVersions()
  const reference = await getReference(version, type, slug)

  return {
    props: {
      context: {
        versions,
        currentVersion: version,
      },
      type: reference.context.type,
      title: reference.context.name,
    },
  }
}

export async function getStaticPaths () {
  let paths = []
  const versions = await getVersions()

  for (const version of versions) {
    const references = await getAllReference(version)

    paths = paths.concat(references.map((item) => ({
      params: {
        path: [version, item.context.type, item.context.name],
      },
    })))
  }

  return { paths, fallback: false }
}

export default ReferenceSingleView

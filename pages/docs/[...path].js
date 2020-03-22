import { DocsSingleView } from '@src/views/docs/single'

import { getVersions, getDocs, getAllDocs, getAllDocsByGroup } from '@api'

export async function getStaticProps ({ params }) {
  const [version, slug] = params.path

  const versions = await getVersions()
  const docs = await getDocs(version, slug)
  const allDocs = await getAllDocs(version, slug)
  const allDocsByGroup = await getAllDocsByGroup(version)

  return {
    props: {
      context: {
        versions,
        currentVersion: version,
        allDocs,
        allDocsByGroup,
      },
      title: docs.attributes.title,
      description: docs.attributes.description,
      body: docs.body,
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
        path: [version, item.attributes.slug],
      }
    })))
  }

  return { paths, fallback: false }
}

export default DocsSingleView

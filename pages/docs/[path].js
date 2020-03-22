import { DocsIndexView } from '@src/views/docs/index'

import { getVersions, getAllDocs, getAllDocsByGroup } from '@api'

export async function getStaticProps ({ params }) {
  const version = params.path

  const versions = await getVersions()
  const allDocs = await getAllDocs(version)
  const allDocsByGroup = await getAllDocsByGroup(version)

  return {
    props: {
      context: {
        versions,
        currentVersion: version,
        allDocs,
        allDocsByGroup,
      },
    }
  }
}

export async function getStaticPaths () {
  const versions = await getVersions()

  const paths = versions.map((version) => ({
    params: {
      path: version,
    }
  }))

  return { paths, fallback: false }
}

export default DocsIndexView

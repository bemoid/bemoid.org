import { DocsIndexView } from '@src/views/docs/index'

import { getVersions } from '@api'

export async function getStaticProps ({ params }) {
  const versions = await getVersions()

  return {
    props: {
      context: {
        versions,
        currentVersion: params.version,
      },
    }
  }
}

export async function getStaticPaths () {
  const versions = await getVersions()

  const paths = versions.map((version) => ({
    params: {
      version: version
    }
  }))

  return { paths, fallback: false }
}

export default DocsIndexView

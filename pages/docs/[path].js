import { object, node } from 'prop-types'

import { DocsIndexView } from '@src/views/docs/index'
import { getVersions, getAllDocs, getAllDocsByGroup } from '@api'
import {
  DocsContextProvider,
  DocsByGroupContextProvider,
  VersionsContextProvider,
  CurrentVersionContextProvider,
} from '@src/contexts'

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

const DocsIndex = ({ context, children }) => {
  return (
    <VersionsContextProvider value={context.versions}>
      <CurrentVersionContextProvider value={context.currentVersion}>
        <DocsByGroupContextProvider value={context.allDocsByGroup}>
          <DocsContextProvider value={context.allDocs}>
            <DocsIndexView>
              {children}
            </DocsIndexView>
          </DocsContextProvider>
        </DocsByGroupContextProvider>
      </CurrentVersionContextProvider>
    </VersionsContextProvider>
  )
}

DocsIndex.propTypes = {
  context: object.isRequired,
  children: node,
}

export default DocsIndex

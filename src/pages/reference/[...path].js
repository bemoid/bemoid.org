import { string, object, node } from 'prop-types'

import { ReferenceSingleView } from 'src/views/reference/single'
import {
  VersionsContextProvider,
  CurrentVersionContextProvider,
} from 'src/contexts'
import {
  getVersions,
  getReference,
  getAllReference,
  getAllDocs,
  getAllDocsByGroup,
} from 'lib'

export async function getStaticProps({ params }) {
  const [version, type, slug] = params.path

  const versions = await getVersions()
  const reference = await getReference(version, type, slug)
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
      type: reference.context.type,
      title: reference.context.name,
    },
  }
}

export async function getStaticPaths() {
  let paths = []
  const versions = await getVersions()

  for (const version of versions) {
    const references = await getAllReference(version)

    paths = paths.concat(
      references.map((item) => ({
        params: {
          path: [version, item.context.type, item.context.name],
        },
      }))
    )
  }

  return { paths, fallback: false }
}

const ReferenceSingle = ({ type, title, context, children }) => {
  return (
    <VersionsContextProvider value={context.versions}>
      <CurrentVersionContextProvider value={context.currentVersion}>
        <ReferenceSingleView type={type} title={title}>
          {children}
        </ReferenceSingleView>
      </CurrentVersionContextProvider>
    </VersionsContextProvider>
  )
}

ReferenceSingle.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  context: object.isRequired,
  children: node,
}

export default ReferenceSingle

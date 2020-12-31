import { string, object, node } from 'prop-types'

import { StyleguideSingleView } from 'src/views/styleguide/single'
import {
  VersionsContextProvider,
  CurrentVersionContextProvider,
} from 'src/contexts'
import {
  getVersions,
  getStyleguide,
  getAllStyleguides,
  getAllDocs,
  getAllDocsByGroup,
} from 'lib'

export async function getStaticProps({ params }) {
  const [version, slug] = params.path

  const versions = await getVersions()
  const styleguide = await getStyleguide(version, slug)
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
      title: styleguide.header,
      description: styleguide.description,
    },
  }
}

export async function getStaticPaths() {
  let paths = []
  const versions = await getVersions()

  for (const version of versions) {
    const styleguides = await getAllStyleguides(version)

    paths = paths.concat(
      styleguides.map((item) => ({
        params: {
          path: [version, item.slug],
        },
      }))
    )
  }

  return { paths, fallback: false }
}

const StyleguideSingle = ({ title, description, context, children }) => {
  return (
    <VersionsContextProvider value={context.versions}>
      <CurrentVersionContextProvider value={context.currentVersion}>
        <StyleguideSingleView title={title} description={description}>
          {children}
        </StyleguideSingleView>
      </CurrentVersionContextProvider>
    </VersionsContextProvider>
  )
}

StyleguideSingle.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  context: object.isRequired,
  children: node,
}

export default StyleguideSingle

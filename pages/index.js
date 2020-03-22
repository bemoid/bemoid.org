import { object, node } from 'prop-types'

import { IndexView } from '@src/views/index'
import { getVersions, getLatestVersion } from '@api'
import { VersionsContextProvider, CurrentVersionContextProvider } from '@src/contexts'

export async function getStaticProps () {
  const versions = await getVersions()
  const currentVersion = await getLatestVersion()

  return {
    props: {
      context: {
        versions,
        currentVersion,
      },
    }
  }
}

const Index = ({ context, children }) => {
  return (
    <VersionsContextProvider value={context.versions}>
      <CurrentVersionContextProvider value={context.currentVersion}>
        <IndexView>
          {children}
        </IndexView>
      </CurrentVersionContextProvider>
    </VersionsContextProvider>
  )
}

Index.propTypes = {
  context: object.isRequired,
  children: node,
}

export default Index

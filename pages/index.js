import { getVersions, getLatestVersion } from '@api'
import { IndexView } from '@src/views/index'

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

export default IndexView

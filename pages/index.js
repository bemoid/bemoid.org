import { getLatestVersion } from '@api'
import { IndexView } from '@src/views/index'

export async function getStaticProps () {
  const version = await getLatestVersion()

  return {
    props: {
      context: {
        version,
      },
    }
  }
}

export default IndexView

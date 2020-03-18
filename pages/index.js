import { IndexView } from '@src/views/index'

import { getLatestVersion } from '@api'

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

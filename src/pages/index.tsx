import { FC } from 'react'
import { GetStaticProps } from 'next'

import { IndexView } from '@/views/index'
import { getVersions, getLatestVersion } from '@/lib'
import {
  VersionsContextProvider,
  CurrentVersionContextProvider,
} from '@/contexts'

type IndexContext = {
  versions: string[]
  currentVersion: string
}

type IndexProps = {
  context: IndexContext
}

export const getStaticProps: GetStaticProps = async () => {
  const versions = await getVersions()
  const currentVersion = await getLatestVersion()

  return {
    props: {
      context: {
        versions,
        currentVersion,
      },
    },
  }
}

const Index: FC<IndexProps> = ({ context, children }) => {
  return (
    <VersionsContextProvider value={context.versions}>
      <CurrentVersionContextProvider value={context.currentVersion}>
        <IndexView>{children}</IndexView>
      </CurrentVersionContextProvider>
    </VersionsContextProvider>
  )
}

export default Index

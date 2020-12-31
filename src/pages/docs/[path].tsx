import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { DocsIndexView } from 'src/views/docs/index'
import { getVersions, getAllDocs, getAllDocsByGroup } from 'src/lib'
import {
  DocsContextProvider,
  DocsByGroupContextProvider,
  VersionsContextProvider,
  CurrentVersionContextProvider,
} from 'src/contexts'

import type { DocsGroupInterface, DocsInterface } from 'src/interfaces/docs'

type DocsIndexContext = {
  versions: string[]
  currentVersion: string
  allDocs: DocsInterface[]
  allDocsByGroup: DocsGroupInterface[]
}

type DocsIndexProps = {
  context: DocsIndexContext
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const version = params.path

  const versions = await getVersions()
  const allDocs = await getAllDocs(String(version))
  const allDocsByGroup = await getAllDocsByGroup(String(version))

  return {
    props: {
      context: {
        versions,
        currentVersion: version,
        allDocs,
        allDocsByGroup,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const versions = await getVersions()

  const paths = versions.map((version) => ({
    params: {
      path: version,
    },
  }))

  return { paths, fallback: false }
}

const DocsIndex: FC<DocsIndexProps> = ({ context, children }) => {
  return (
    <VersionsContextProvider value={context.versions}>
      <CurrentVersionContextProvider value={context.currentVersion}>
        <DocsByGroupContextProvider value={context.allDocsByGroup}>
          <DocsContextProvider value={context.allDocs}>
            <DocsIndexView>{children}</DocsIndexView>
          </DocsContextProvider>
        </DocsByGroupContextProvider>
      </CurrentVersionContextProvider>
    </VersionsContextProvider>
  )
}

export default DocsIndex

import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { DocsSingleView } from 'src/views/docs/single'
import { getVersions, getDocs, getAllDocs, getAllDocsByGroup } from 'lib'
import {
  DocsContextProvider,
  DocsByGroupContextProvider,
  VersionsContextProvider,
  CurrentVersionContextProvider,
} from 'src/contexts'

import type {
  DocsInterface,
  DocsGroupInterface,
  DocsHeadingsInterface,
  DocsAttributesInterface,
  DocsShortcodesInterface,
} from 'interfaces/docs'

type DocsSingleContext = {
  versions: string[]
  currentVersion: string
  allDocs: DocsInterface[]
  allDocsByGroup: DocsGroupInterface[]
}

type DocsSingleProps = {
  title: DocsAttributesInterface['title']
  description: DocsAttributesInterface['description']
  body: DocsInterface['body']
  shortcodes: DocsShortcodesInterface
  headings: DocsHeadingsInterface[]
  context: DocsSingleContext
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [version, slug] = params.path

  const versions = await getVersions()
  const docs = await getDocs(version, slug)
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
      title: docs.attributes.title,
      description: docs.attributes.description,
      shortcodes: docs.attributes.shortcodes,
      headings: docs.attributes.headings,
      body: docs.body,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = []
  const versions = await getVersions()

  for (const version of versions) {
    const docs = await getAllDocs(version)

    paths = paths.concat(
      docs.map((item) => ({
        params: {
          path: [version, item.attributes.slug],
        },
      }))
    )
  }

  return { paths, fallback: false }
}

const DocsSingle: FC<DocsSingleProps> = ({
  title,
  description,
  shortcodes,
  headings,
  body,
  context,
  children,
}) => {
  return (
    <VersionsContextProvider value={context.versions}>
      <CurrentVersionContextProvider value={context.currentVersion}>
        <DocsByGroupContextProvider value={context.allDocsByGroup}>
          <DocsContextProvider value={context.allDocs}>
            <DocsSingleView
              title={title}
              description={description}
              shortcodes={shortcodes}
              headings={headings}
              body={body}
            >
              {children}
            </DocsSingleView>
          </DocsContextProvider>
        </DocsByGroupContextProvider>
      </CurrentVersionContextProvider>
    </VersionsContextProvider>
  )
}

export default DocsSingle

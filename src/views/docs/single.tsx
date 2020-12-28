import { FC } from 'react'

import { PageLayout } from 'src/layouts'
import {
  Headline,
  Content,
  NavigationDocs,
  TableOfContent,
} from 'src/components'

import {
  DocsHeadingsInterface,
  DocsInterface,
  DocsShortcodesInterface,
  DocsAttributesInterface,
} from 'interfaces/docs'

type DocsSingleViewProps = {
  title: DocsAttributesInterface['title']
  description: DocsAttributesInterface['title']
  shortcodes: DocsShortcodesInterface
  headings: DocsHeadingsInterface[]
  body: DocsInterface['body']
}

export const DocsSingleView: FC<DocsSingleViewProps> = ({
  title,
  description,
  shortcodes,
  headings,
  body,
}) => {
  return (
    <PageLayout
      title={`${title} — Documentation`}
      description={description}
      sidebar={<NavigationDocs />}
      aside={<TableOfContent list={headings} />}
      headline={<Headline heading={title}>{description}</Headline>}
    >
      <Content html={body} shortcodes={shortcodes} />
    </PageLayout>
  )
}

import { array, string, object } from 'prop-types'

import { PageLayout } from '@src/layouts'
import { Headline, Content, NavigationDocs, TableOfContent } from '@src/components'

export const DocsSingleView = ({ title, description, shortcodes, headings, body }) => {
  return (
    <PageLayout
      title={`${title} — Documentation`}
      description={description}
      sidebar={<NavigationDocs />}
      aside={<TableOfContent list={headings} />}
      headline={<Headline heading={title}>{description}</Headline>}
    >
      <Content content={body} shortcodes={shortcodes} />
    </PageLayout>
  )
}

DocsSingleView.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  shortcodes: object,
  headings: array,
  body: string.isRequired,
}

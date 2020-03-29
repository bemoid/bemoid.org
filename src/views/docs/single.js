import { string, object } from 'prop-types'

import { PageLayout } from '@src/layouts'
import { Headline, Content, NavigationDocs } from '@src/components'

export const DocsSingleView = ({ title, description, shortcodes, body }) => {
  return (
    <PageLayout
      title={`${title} — Documentation`}
      description={description}
      aside={<NavigationDocs />}
      sidebar={<NavigationDocs />}
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
  body: string.isRequired,
}

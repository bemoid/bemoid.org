import { string, object } from 'prop-types'

import { PageLayout } from '@src/layouts'
import { Headline } from '@src/components'

export const DocsSingleView = ({ title, description, body, context }) => {
  return (
    <PageLayout
      title={`${title} — Documentation`}
      description={description}
      heading={`Documentation`}
      excerpt={`A living components documentation of the Bemoid SCSS framework.`}
      context={context}
    >
      <Headline heading={title}>{description}</Headline>

      {body}
    </PageLayout>
  )
}

DocsSingleView.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  body: string.isRequired,
  context: object.isRequired,
}

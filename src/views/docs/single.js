import { string } from 'prop-types'

import { PageLayout } from '@src/layouts'
import { Headline, NavigationDocs } from '@src/components'

import * as Styled from './docs.styled'

export const DocsSingleView = ({ title, description, body }) => {
  return (
    <PageLayout
      title={`${title} — Documentation`}
      description={description}
      aside={<NavigationDocs />}
    >
      <Headline heading={title}>
        {description}
      </Headline>

      <Styled.Content dangerouslySetInnerHTML={{ __html: body }} />
    </PageLayout>
  )
}

DocsSingleView.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  body: string.isRequired,
}

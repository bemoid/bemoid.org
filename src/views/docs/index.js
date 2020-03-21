import { object } from 'prop-types'

import { PageLayout } from '@src/layouts'
import { Headline } from '@src/components'

export const DocsIndexView = ({ context }) => {
  return (
    <PageLayout
      title={`Introduction — Documentation`}
      description={`Introduction`}
      heading={`Documentation`}
      excerpt={`A living components documentation of the Bemoid SCSS framework.`}
      context={context}
    >
      <Headline heading="Introduction">
        A component-oriented SASS framework based on BEM convention and OOCSS methodology
      </Headline>
    </PageLayout>
  )
}

DocsIndexView.propTypes = {
  context: object.isRequired,
}

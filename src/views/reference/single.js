import { string, object } from 'prop-types'

import { PageLayout } from 'src/layouts'

export const ReferenceSingleView = ({ context, type, title }) => {
  return (
    <PageLayout
      title={`${title} — API Reference`}
      // description={description}
      heading={`API Reference`}
      excerpt={`A living components documentation of the Bemoid SCSS framework.`}
      context={context}
    >
      <main>{title}</main>
    </PageLayout>
  )
}

ReferenceSingleView.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  context: object.isRequired,
}

import { string, object } from 'prop-types'

import { PageLayout } from '@/layouts'

export const StyleguideSingleView = ({ context, title, description }) => {
  return (
    <PageLayout
      title={`${title} — Styleguide`}
      description={description}
      heading={`Styleguide`}
      excerpt={`A living components documentation of the Bemoid SCSS framework.`}
      context={context}
    >
      <main>{title}</main>
    </PageLayout>
  )
}

StyleguideSingleView.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  context: object.isRequired,
}

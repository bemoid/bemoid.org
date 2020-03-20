import { string, object } from 'prop-types'

import { Head, Layout } from '@src/layouts'
import { Header, Headline } from '@src/components'

export const DocsSingleView = ({ title, description, context }) => {
  return (
    <Layout>
      <Head
        title={`${title} Documentation`}
        description={description}
        version={context.version}
      />

      <Header>
        <Headline heading='Documentation'>
          A living styleguide and guidelines of all component the Bemoid CSS framework.
        </Headline>
      </Header>

      <main>

      </main>
    </Layout>
  )
}

DocsSingleView.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  context: object.isRequired,
}

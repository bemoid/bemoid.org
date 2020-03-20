import { object } from 'prop-types'

import { Head, Layout } from '@src/layouts'
import { Header, Hero } from '@src/components'

export const IndexView = ({ context }) => (
  <Layout>
    <Head currentVersion={context.currentVersion} />

    <Header currentVersion={context.currentVersion}>
      <Hero
        heading="Bemoid"
        content="A component-oriented SASS framework based on BEM convention and OOCSS methodology"
      />
    </Header>

    <main>

    </main>
  </Layout>
)

IndexView.propTypes = {
  context: object.isRequired,
}

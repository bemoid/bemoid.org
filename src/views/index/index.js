import { object } from 'prop-types'

import { Head, Layout } from '@src/layouts'
import { Header, Hero, Navbar } from '@src/components'

export const IndexView = ({ context }) => (
  <Layout>
    <Head version={context.version} />

    <Header>
      <Navbar version={context.version} />

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

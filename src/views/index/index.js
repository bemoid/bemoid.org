import { object } from 'prop-types'

import { Layout } from '@src/layouts'
import { Header, Hero } from '@src/components'

export const IndexView = ({ context }) => {
  const { versions, currentVersion } = context

  return (
    <Layout
      currentVersion={currentVersion}
      context={context}
    >
      <Header
        versions={versions}
        currentVersion={currentVersion}
      >
        <Hero
          heading="Bemoid"
          content="A component-oriented SASS framework based on BEM convention and OOCSS methodology"
        />
      </Header>

      <main>

      </main>
    </Layout>
  )
}

IndexView.propTypes = {
  context: object.isRequired,
}

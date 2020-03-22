import { Layout } from '@src/layouts'
import { Header, Hero } from '@src/components'

export const IndexView = () => {
  return (
    <Layout>
      <Header>
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

import { useContext } from 'react'
import { CurrentVersionContext } from '@src/contexts'

import { Layout } from '@src/layouts'
import { Header, Hero, Menu } from '@src/components'

export const IndexView = () => {
  const { currentVersion } = useContext(CurrentVersionContext)

  return (
    <Layout>
      <Header
        navbarAsideEnd={
          <Menu items={[
            { title: 'Guide', href: `/guide/${currentVersion}` },
            { title: 'Documentation', href: `/docs/${currentVersion}` },
            { title: 'API Reference', href: `/reference/${currentVersion}` },
          ]} />
        }
      >
        <Hero
          heading="Bemoid"
          content="A component-oriented SASS framework based on BEM convention and OOCSS methodology"
        />
      </Header>

      <main>
        {/* content */}
      </main>
    </Layout>
  )
}

import { useContext, FC } from 'react'
import { CurrentVersionContext } from '@/contexts'

import { Layout } from '@/layouts'
import { Header, Hero, Menu } from '@/components'

export const IndexView: FC = () => {
  const { currentVersion } = useContext(CurrentVersionContext)

  return (
    <Layout>
      <Header
        navbarAsideEnd={
          <Menu
            items={[
              { title: 'Guide', href: `/guide/${currentVersion}` },
              { title: 'Documentation', href: `/docs/${currentVersion}` },
              { title: 'API Reference', href: `/reference/${currentVersion}` },
            ]}
          />
        }
      >
        <Hero
          heading="Bemoid"
          content="A component-oriented SASS framework based on BEM convention and OOCSS methodology"
        />
      </Header>

      <main>{/* content */}</main>
    </Layout>
  )
}

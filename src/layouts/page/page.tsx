import { useContext, FC, ReactElement } from 'react'

import { Layout } from '@/layouts'
import { Header, Callout, SearchBar, SelectVersion } from '@/components'
import { VersionsContext, CurrentVersionContext } from '@/contexts'

import { DocsAttributesInterface } from '@/interfaces/docs'

import * as Styled from './page.styled'

export type PageLayoutProps = {
  title: DocsAttributesInterface['title']
  description: DocsAttributesInterface['description']
  aside?: ReactElement
  sidebar?: ReactElement
  headline?: ReactElement
}

export const PageLayout: FC<PageLayoutProps> = ({
  title,
  description,
  aside,
  sidebar,
  headline,
  children,
}) => {
  const { versions } = useContext(VersionsContext)
  const { currentVersion } = useContext(CurrentVersionContext)

  return (
    <Layout title={title} description={description}>
      <Header
        navbarAsideStart={
          <SelectVersion versions={versions} currentVersion={currentVersion} />
        }
        navbarContent={<SearchBar />}
        variant={['withPadding']}
      >
        <Callout heading="Documentation">
          A living components documentation of the Bemoid SCSS framework.
        </Callout>
      </Header>

      <Styled.Main>
        {sidebar && <Styled.Sidebar>{sidebar}</Styled.Sidebar>}

        <Styled.Wrapper>
          {headline}

          <Styled.Body>
            <Styled.Content>{children}</Styled.Content>

            {aside && (
              <Styled.Aside>
                <Styled.AsideTrack>{aside}</Styled.AsideTrack>
              </Styled.Aside>
            )}
          </Styled.Body>
        </Styled.Wrapper>
      </Styled.Main>
    </Layout>
  )
}

import { object, string, node } from 'prop-types'

import { Layout } from '@src/layouts'
import { Header, Callout } from '@src/components'

import * as Styled from './page.styled'

export const PageLayout = ({
  title,
  description,
  heading,
  excerpt,
  context,
  children
}) => {
  return (
    <Layout
      title={title}
      description={description}
      context={context}
    >
      <Header
        versions={context.versions}
        currentVersion={context.currentVersion}
        variant={['withPadding']}
      >
        <Callout heading={heading}>{excerpt}</Callout>
      </Header>

      <Styled.Main>
        <Styled.Sidebar>
          Menu
        </Styled.Sidebar>

        <Styled.Content>
          {children}
        </Styled.Content>
      </Styled.Main>
    </Layout>
  )
}

PageLayout.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  heading: string.isRequired,
  excerpt: string.isRequired,
  context: object.isRequired,
  children: node.isRequired,
}

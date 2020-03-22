import { string, node, element } from 'prop-types'

import { Layout } from '@src/layouts'
import { Header, Callout } from '@src/components'

import * as Styled from './page.styled'

export const PageLayout = ({
  title,
  description,
  aside,
  children,
}) => {
  return (
    <Layout title={title} description={description}>
      <Header variant={['withPadding']}>
        <Callout heading="Documentation">
          A living components documentation of the Bemoid SCSS framework.
        </Callout>
      </Header>

      <Styled.Main>
        <Styled.Sidebar>{aside}</Styled.Sidebar>

        <Styled.Body>{children}</Styled.Body>
      </Styled.Main>
    </Layout>
  )
}

PageLayout.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  aside: element.isRequired,
  children: node.isRequired,
}

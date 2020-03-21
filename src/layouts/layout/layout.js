import { object, string, node } from 'prop-types'

import { Head } from '@src/layouts'

import * as Styled from './layout.styled'

export const Layout = ({ title, description, context, children }) => {
  return (
    <Styled.Layout>
      <Head
        title={title}
        description={description}
        currentVersion={context.currentVersion}
      />

      {children}
    </Styled.Layout>
  )
}

Layout.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  context: object.isRequired,
  children: node.isRequired,
}

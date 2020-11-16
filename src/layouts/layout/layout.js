import { string, node } from 'prop-types'
import { useContext } from 'react'

import { Head } from '@src/layouts'
import { Footer } from '@src/components'
import { CurrentVersionContext } from '@src/contexts'

import * as Styled from './layout.styled'

export const Layout = ({ title, description, children }) => {
  const { currentVersion } = useContext(CurrentVersionContext)

  return (
    <Styled.Layout>
      <Head
        title={title}
        description={description}
        currentVersion={currentVersion}
      />

      {children}

      <Footer />
    </Styled.Layout>
  )
}

Layout.propTypes = {
  title: string,
  description: string,
  children: node.isRequired,
}

Layout.defaultProps = {
  title: '',
  description: '',
}

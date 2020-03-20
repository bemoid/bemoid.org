import { node } from 'prop-types'

import { Navbar } from '@src/components'

import * as Styled from './header.styled'

export const Header = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Navbar />

      {children && (
        <Styled.Body>{children}</Styled.Body>
      )}
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  children: node.isRequired,
}

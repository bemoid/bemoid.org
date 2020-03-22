import { arrayOf, node, string } from 'prop-types'

import { Navbar } from '@src/components'

import * as Styled from './header.styled'

export const Header = ({ variant, children }) => {
  return (
    <Styled.Wrapper>
      <Navbar />

      <Styled.Body variant={variant}>
        {children}
      </Styled.Body>
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  variant: arrayOf(string),
  children: node.isRequired,
}

Header.defaultProps = {
  variant: [],
}

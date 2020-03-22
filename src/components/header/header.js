import { arrayOf, node, string, element } from 'prop-types'

import { Navbar } from '@src/components'

import * as Styled from './header.styled'

export const Header = ({ navbarAside, variant, children }) => {
  return (
    <Styled.Wrapper>
      <Navbar aside={navbarAside} />

      <Styled.Body variant={variant}>
        {children}
      </Styled.Body>
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  navbarAside: element,
  variant: arrayOf(string),
  children: node.isRequired,
}

Header.defaultProps = {
  navbarAside: null,
  variant: [],
}

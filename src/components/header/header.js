import { arrayOf, node, string, element } from 'prop-types'

import { Navbar } from '@src/components'

import * as Styled from './header.styled'

export const Header = ({ navbarAsideStart, navbarContent, navbarAsideEnd, variant, children }) => {
  return (
    <Styled.Wrapper>
      <Navbar asideStart={navbarAsideStart} content={navbarContent} asideEnd={navbarAsideEnd} />

      <Styled.Body variant={variant}>
        {children}
      </Styled.Body>
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  navbarAsideStart: element,
  navbarContent: element,
  navbarAsideEnd: element,
  variant: arrayOf(string),
  children: node.isRequired,
}

Header.defaultProps = {
  navbarAsideStart: null,
  navbarContent: null,
  navbarAsideEnd: null,
  variant: [],
}

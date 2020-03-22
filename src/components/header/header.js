import { arrayOf, node, string } from 'prop-types'

import { Navbar } from '@src/components'

import * as Styled from './header.styled'

export const Header = ({ versions, currentVersion, variant, children }) => {
  return (
    <Styled.Wrapper>
      <Navbar versions={versions} currentVersion={currentVersion} />

      <Styled.Body variant={variant}>
        {children}
      </Styled.Body>
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  versions: arrayOf(string),
  currentVersion: string.isRequired,
  variant: arrayOf(string),
  children: node.isRequired,
}

Header.defaultProps = {
  versions: [],
  variant: [],
}

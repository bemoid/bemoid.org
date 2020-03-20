import { array, node, string } from 'prop-types'

import { Navbar } from '@src/components'

import * as Styled from './header.styled'

export const Header = ({ currentVersion, variant, children }) => {
  return (
    <Styled.Wrapper>
      <Navbar currentVersion={currentVersion} />

      <Styled.Body variant={variant}>
        {children}
      </Styled.Body>
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  currentVersion: string.isRequired,
  variant: array,
  children: node.isRequired,
}

Header.defaultProps = {
  variant: [],
}

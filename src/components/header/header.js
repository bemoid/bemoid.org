import { array, node } from 'prop-types'

import * as Styled from './header.styled'

export const Header = ({ variant, children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Body variant={variant}>
        {children}
      </Styled.Body>
    </Styled.Wrapper>
  )
}

Header.propTypes = {
  variant: array,
  children: node.isRequired,
}

Header.defaultProps = {
  variant: [],
}

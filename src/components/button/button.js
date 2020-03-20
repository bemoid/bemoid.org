import * as Styled from './button.styled'

import { string, bool, node } from 'prop-types'

export const Button = ({
  href,
  size,
  expand,
  children,
}) => {
  return (
    <Styled.Button href={href}>
      {children}
    </Styled.Button>
  )
}

Button.propTypes = {
  href: string.isRequired,
  size: string,
  expand: bool,
  children: node.isRequired,
}

Button.defaultProps = {
  size: 'medium',
  expand: false,
}

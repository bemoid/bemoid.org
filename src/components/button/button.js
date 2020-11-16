import * as Styled from './button.styled'

import { string, bool, node } from 'prop-types'

export const Button = ({ href, size, expand, className, children }) => {
  return (
    <Styled.Button href={href} size={size} expand={expand} className={className}>
      {children}
    </Styled.Button>
  )
}

Button.propTypes = {
  href: string.isRequired,
  size: string,
  expand: bool,
  className: string,
  children: node.isRequired,
}

Button.defaultProps = {
  size: 'medium',
  className: '',
  expand: false,
}

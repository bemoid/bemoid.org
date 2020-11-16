import { string, bool, node } from 'prop-types'

import * as Styled from './button-fill.styled'

export const ButtonFill = ({ href, size, expand, variant, className, children }) => {
  return (
    <Styled.ButtonFill href={href} size={size} expand={expand} variant={variant} className={className}>
      {children}
    </Styled.ButtonFill>
  )
}

ButtonFill.propTypes = {
  href: string.isRequired,
  size: string,
  variant: string,
  expand: bool,
  className: string,
  children: node.isRequired,
}

ButtonFill.defaultProps = {
  size: 'medium',
  variant: 'primary',
  expand: false,
  className: '',
}

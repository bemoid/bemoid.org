import { string, bool, node } from 'prop-types'

import * as Styled from './button-hollow.styled'

export const ButtonHollow = ({
  href,
  size,
  expand,
  variant,
  className,
  children,
}) => {
  return (
    <Styled.ButtonHollow
      href={href}
      size={size}
      expand={expand}
      variant={variant}
      className={className}
    >
      {children}
    </Styled.ButtonHollow>
  )
}

ButtonHollow.propTypes = {
  href: string.isRequired,
  size: string,
  variant: string,
  expand: bool,
  className: string,
  children: node.isRequired,
}

ButtonHollow.defaultProps = {
  size: 'medium',
  variant: 'primary',
  expand: false,
  className: '',
}

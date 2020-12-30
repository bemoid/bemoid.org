import { forwardRef } from 'react'

import type { ButtonProps } from './button'

import * as Styled from './button-fill.styled'

export type ButtonFillProps = ButtonProps & {
  variant?: 'primary'
}

export const ButtonFill = forwardRef<HTMLAnchorElement, ButtonFillProps>(
  ({ variant = 'primary', children, ...rest }, ref) => {
    return (
      <Styled.ButtonFill variant={variant} ref={ref} {...rest}>
        {children}
      </Styled.ButtonFill>
    )
  }
)

import { forwardRef } from 'react'

import type { ButtonProps } from './button'

import * as Styled from './button-hollow.styled'

export type ButtonHollowProps = ButtonProps & {
  variant?: 'primary' | 'neutral'
}

export const ButtonHollow = forwardRef<HTMLAnchorElement, ButtonHollowProps>(
  ({ variant = 'primary', children, ...rest }, ref) => {
    return (
      <Styled.ButtonHollow variant={variant} ref={ref} {...rest}>
        {children}
      </Styled.ButtonHollow>
    )
  }
)

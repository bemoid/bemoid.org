import { forwardRef } from 'react'

import * as Styled from './hamburger.styled'

export type HamburgerProps = {
  onClick?: () => void
}

export const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ onClick, ...rest }, ref) => {
    return (
      <Styled.Hamburger onClick={onClick} ref={ref} {...rest}>
        <svg
          width="25"
          height="22"
          viewBox="0 0 30 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 11.19h30v2.62H0zM0 23.194h30v2.613H0zM0 .19h30v2.62H0z" />
        </svg>
      </Styled.Hamburger>
    )
  }
)

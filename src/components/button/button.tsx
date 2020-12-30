import { forwardRef, ReactNode } from 'react'

import * as Styled from './button.styled'

export type ButtonProps = {
  href: string
  size?: 'medium' | 'large'
  expand?: boolean
  className?: string
  children: ReactNode
  onClick?: () => void
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      href,
      size = 'medium',
      expand = false,
      className = '',
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <Styled.Button
        href={href}
        size={size}
        expand={expand}
        className={className}
        onClick={onClick}
        ref={ref}
        data-testid="button"
        {...rest}
      >
        {children}
      </Styled.Button>
    )
  }
)

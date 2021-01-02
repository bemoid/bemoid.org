import { forwardRef } from 'react'

import { Navbar } from '@/components'

import type { ReactElement } from 'react'

import * as Styled from './header.styled'

export type HeaderProps = {
  navbarAsideStart?: ReactElement
  navbarContent?: ReactElement
  navbarAsideEnd?: ReactElement
  variant: Partial<['withPadding']>
  children?: ReactElement
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      navbarAsideStart = null,
      navbarContent = null,
      navbarAsideEnd = null,
      variant = ['withPadding'],
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Styled.Wrapper ref={ref} {...rest}>
        <Navbar
          asideStart={navbarAsideStart}
          content={navbarContent}
          asideEnd={navbarAsideEnd}
        />

        <Styled.Body variant={variant}>{children}</Styled.Body>
      </Styled.Wrapper>
    )
  }
)

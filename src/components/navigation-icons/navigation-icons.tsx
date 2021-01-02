import { forwardRef } from 'react'

import type { ReactElement } from 'react'

import * as Styled from './navigation-icons.styled'

export type NavigationIconsItemProps = {
  title: string
  href: string
  icon: ReactElement
}

export type NavigationIconsProps = {
  items: NavigationIconsItemProps[]
}

export const NavigationIcons = forwardRef<
  HTMLUListElement,
  NavigationIconsProps
>(({ items, ...rest }, ref) => {
  return (
    <Styled.Navigation ref={ref} {...rest}>
      {items.map((item, index) => (
        <Styled.Item key={index}>
          <Styled.Link href={item.href}>
            <Styled.Icon>{item.icon}</Styled.Icon> <span>{item.title}</span>
          </Styled.Link>
        </Styled.Item>
      ))}
    </Styled.Navigation>
  )
})

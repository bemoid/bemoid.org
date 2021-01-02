import { forwardRef } from 'react'

import * as Styled from './menu-mobile.styled'

import type { MenuItemProps } from '@/components/menu'

export type MenuMobileProps = {
  items: MenuItemProps[]
}

export const MenuMobile = forwardRef<HTMLUListElement, MenuMobileProps>(
  ({ items, ...rest }, ref) => {
    return (
      <Styled.MenuMobile ref={ref} {...rest}>
        {items.map((item, index) => (
          <Styled.Item key={index}>
            <Styled.Link href={item.href}>{item.title}</Styled.Link>
          </Styled.Item>
        ))}
      </Styled.MenuMobile>
    )
  }
)

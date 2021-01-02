import { forwardRef } from 'react'

import * as Styled from './menu.styled'

export type MenuItemProps = {
  title: string
  href: string
}

export type MenuProps = {
  items: MenuItemProps[]
}

export const Menu = forwardRef<HTMLUListElement, MenuProps>(
  ({ items, ...rest }, ref) => {
    return (
      <Styled.List ref={ref} {...rest}>
        {items.map((item, index) => (
          <Styled.Item key={index}>
            <Styled.Link href={item.href}>{item.title}</Styled.Link>
          </Styled.Item>
        ))}
      </Styled.List>
    )
  }
)

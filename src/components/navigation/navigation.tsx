import { forwardRef } from 'react'
import { useRouter } from 'next/router'

import * as Styled from './navigation.styled'

export type NavigationItemProps = {
  title: string
  href: string
}

export type NavigationElementProps = {
  name: string
  items: NavigationItemProps[]
}

export type NavigationProps = {
  items: NavigationElementProps[]
}

export const Navigation = forwardRef<HTMLDivElement, NavigationProps>(
  ({ items, ...rest }, ref) => {
    const router = useRouter()

    return (
      <Styled.Navigation ref={ref} {...rest}>
        {items.map((group) => (
          <Styled.Group key={group.name}>
            <Styled.Heading>{group.name}</Styled.Heading>

            <Styled.Group>
              {group.items.map((item, index) => (
                <Styled.Item key={index}>
                  <Styled.Link
                    href={item.href}
                    active={item.href === router.asPath}
                  >
                    {item.title}
                  </Styled.Link>
                </Styled.Item>
              ))}
            </Styled.Group>
          </Styled.Group>
        ))}
      </Styled.Navigation>
    )
  }
)

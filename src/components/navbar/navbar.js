import { useState } from 'react'

import { Navigation } from '@src/components/navigation/navigation'

import * as Styled from './navbar.styled'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <Styled.Wrapper>
      <Styled.Body>
        <Styled.Aside>
          <a href="/">
            <Styled.Logo src='/images/bemoid-logo.svg' />
          </a>
        </Styled.Aside>

        <Styled.Content>
          <Styled.Nav items={[
            { title: 'Guide', href: '/guide/' },
            { title: 'Documentation', href: '/docs/' },
            { title: 'API Reference', href: '/reference/' },
          ]} />

          <Styled.Button onClick={() => setActive(!active)} />
        </Styled.Content>
      </Styled.Body>

      <Styled.Offcanvas active={active}>
        <Navigation items={[
          { title: 'Guide', href: '/guide/' },
          { title: 'Documentation', href: '/docs/' },
          { title: 'API Reference', href: '/reference/' },
          { title: 'Github', href: 'https://github.com/bemoid/bemoid/' },
        ]} />
      </Styled.Offcanvas>
    </Styled.Wrapper>
  )
}

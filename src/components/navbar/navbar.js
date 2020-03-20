import { useState } from 'react'
import { string, arrayOf } from 'prop-types'

import { Navigation } from '@src/components/navigation/navigation'

import * as Styled from './navbar.styled'

export const Navbar = ({ currentVersion }) => {
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
            { title: 'Guide', href: `/guide/${currentVersion}/` },
            { title: 'Documentation', href: `/docs/${currentVersion}/` },
            { title: 'API Reference', href: `/reference/${currentVersion}/` },
          ]} />

          <Styled.Button onClick={() => setActive(!active)} />
        </Styled.Content>
      </Styled.Body>

      <Styled.Offcanvas active={active}>
        <Navigation items={[
          { title: 'Guide', href: `/guide/${currentVersion}/` },
          { title: 'Documentation', href: `/docs/${currentVersion}/` },
          { title: 'API Reference', href: `/reference/${currentVersion}/` },
          { title: 'Github', href: 'https://github.com/bemoid/bemoid/' },
        ]} />
      </Styled.Offcanvas>
    </Styled.Wrapper>
  )
}

Navbar.propTypes = {
  currentVersion: string.isRequired,
}

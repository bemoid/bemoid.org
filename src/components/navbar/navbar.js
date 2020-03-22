import { element } from 'prop-types'
import { useState, useContext } from 'react'

import { MenuMobile } from '@src/components'
import { CurrentVersionContext } from '@src/contexts'

import * as Styled from './navbar.styled'

export const Navbar = ({ aside }) => {
  const { currentVersion } = useContext(CurrentVersionContext)

  const [active, setActive] = useState(false)

  return (
    <Styled.Wrapper>
      <Styled.Body>
        <Styled.Aside>
          <a href="/" aria-label="Homepage">
            <Styled.Logo src='/images/bemoid-logo.svg' alt="Bemoid - A component-oriented SASS framework" />
          </a>

          {aside}
        </Styled.Aside>

        <Styled.Content>
          <Styled.Nav items={[
            { title: 'Guide', href: `/guide/${currentVersion}` },
            { title: 'Documentation', href: `/docs/${currentVersion}` },
            { title: 'API Reference', href: `/reference/${currentVersion}` },
          ]} />

          <Styled.Button onClick={() => setActive(!active)} />
        </Styled.Content>
      </Styled.Body>

      <Styled.Offcanvas active={active}>
        <MenuMobile items={[
          { title: 'Guide', href: `/guide/${currentVersion}` },
          { title: 'Documentation', href: `/docs/${currentVersion}` },
          { title: 'API Reference', href: `/reference/${currentVersion}` },
          { title: 'Github', href: 'https://github.com/bemoid/bemoid' },
        ]} />
      </Styled.Offcanvas>
    </Styled.Wrapper>
  )
}

Navbar.propTypes = {
  aside: element,
}

Navbar.defaultProps = {
  aside: null,
}

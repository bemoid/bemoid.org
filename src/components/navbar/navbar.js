import { element } from 'prop-types'
import { useState, useContext } from 'react'

import { MenuMobile } from 'src/components'
import { CurrentVersionContext } from 'src/contexts'

import * as Styled from './navbar.styled'

export const Navbar = ({ content, asideStart, asideEnd }) => {
  const { currentVersion } = useContext(CurrentVersionContext)

  const [activeOffcanvas, setActiveOffcanvas] = useState(false)

  return (
    <Styled.Wrapper>
      <Styled.Body>
        <Styled.AsideStart>
          <a href="/" aria-label="Homepage">
            <Styled.Logo
              src="/images/bemoid-logo.svg"
              alt="Bemoid - A component-oriented SASS framework"
            />
          </a>

          {asideStart}
        </Styled.AsideStart>

        {content && <Styled.Content>{content}</Styled.Content>}

        <Styled.AsideEnd>
          {asideEnd && <Styled.Sidebar>{asideEnd}</Styled.Sidebar>}

          <Styled.Button onClick={() => setActiveOffcanvas(!activeOffcanvas)} />
        </Styled.AsideEnd>
      </Styled.Body>

      <Styled.Offcanvas active={activeOffcanvas}>
        <MenuMobile
          items={[
            { title: 'Guide', href: `/guide/${currentVersion}` },
            { title: 'Documentation', href: `/docs/${currentVersion}` },
            { title: 'API Reference', href: `/reference/${currentVersion}` },
            { title: 'Github', href: 'https://github.com/bemoid/bemoid' },
          ]}
        />
      </Styled.Offcanvas>
    </Styled.Wrapper>
  )
}

Navbar.propTypes = {
  asideStart: element,
  content: element,
  asideEnd: element,
}

Navbar.defaultProps = {
  asideStart: null,
  content: null,
  asideEnd: null,
}

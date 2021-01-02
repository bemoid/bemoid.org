import { useState, useContext, forwardRef } from 'react'

import { MenuMobile } from '@/components'
import { CurrentVersionContext } from '@/contexts'

import type { ReactElement } from 'react'

import * as Styled from './navbar.styled'

export type NavbarProps = {
  asideStart?: ReactElement
  content?: ReactElement
  asideEnd?: ReactElement
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ content = null, asideStart = null, asideEnd = null, ...rest }, ref) => {
    const { currentVersion } = useContext(CurrentVersionContext)

    const [activeOffcanvas, setActiveOffcanvas] = useState(false)

    return (
      <Styled.Wrapper ref={ref} {...rest}>
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

            <Styled.Button
              onClick={() => setActiveOffcanvas(!activeOffcanvas)}
            />
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
)

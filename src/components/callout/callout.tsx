import { forwardRef } from 'react'

import { ButtonHollow } from '@/components'

import type { ReactNode } from 'react'

import * as Styled from './callout.styled'

export type CalloutProps = {
  heading: string
  children: ReactNode
}

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ heading, children, ...rest }, ref) => {
    return (
      <Styled.Wrapper ref={ref} {...rest}>
        <Styled.Header>
          <Styled.Heading>{heading}</Styled.Heading>
        </Styled.Header>

        <Styled.Body>
          <Styled.Content>{children}</Styled.Content>
        </Styled.Body>

        <Styled.Aside>
          <ButtonHollow
            href="https://github.com/bemoid/bemoid"
            data-testid="callout.button"
          >
            Visit Github
          </ButtonHollow>
        </Styled.Aside>
      </Styled.Wrapper>
    )
  }
)

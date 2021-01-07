import { forwardRef } from 'react'

import type { ReactNode } from 'react'

import * as Styled from './headline.styled'

export type HeadlineProps = {
  heading: string
  children: ReactNode
}

export const Headline = forwardRef<HTMLDivElement, HeadlineProps>(
  ({ heading, children, ...rest }, ref) => {
    return (
      <Styled.Headline ref={ref} {...rest}>
        <h2>{heading}</h2>

        {children}
      </Styled.Headline>
    )
  }
)

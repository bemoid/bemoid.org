import { forwardRef } from 'react'

import { Code } from '@/components'

import * as Styled from './example.styled'

export type ExampleProps = {
  html: string
}

export const Example = forwardRef<HTMLDivElement, ExampleProps>(
  ({ html, ...rest }, ref) => {
    return (
      <Styled.Example ref={ref} {...rest}>
        <Styled.View dangerouslySetInnerHTML={{ __html: html }} />

        <Code code={html} language="markup" />
      </Styled.Example>
    )
  }
)

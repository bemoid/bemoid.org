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
        <iframe
          srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8">

              <link rel="stylesheet" type="text/css" href="/css/0.4/bemoid.css">
            </head>
            <body>
              ${html}
            </body>
          </html>
        `}
        />

        <Code code={html} language="markup" />
      </Styled.Example>
    )
  }
)

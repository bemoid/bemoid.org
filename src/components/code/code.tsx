import { forwardRef } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import type { Language } from 'prism-react-renderer'

import theme from './code.styled'

export type CodeProps = {
  code: string
  language: Language
}

export const Code = forwardRef<HTMLPreElement, CodeProps>(
  ({ code, language, ...rest }, ref) => {
    return (
      <Highlight
        theme={theme}
        code={code}
        language={language}
        {...defaultProps}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style} ref={ref} {...rest}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={i} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
)

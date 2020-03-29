import { string } from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'

import theme from './code.styled'

export const Code = ({ code, language }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
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

Code.propTypes = {
  code: string.isRequired,
  language: string.isRequired,
}

import { string } from 'prop-types'

import { Code } from 'src/components'

import * as Styled from './example.styled'

export const Example = ({ html }) => {
  return (
    <Styled.Example>
      <Styled.View dangerouslySetInnerHTML={{ __html: html }} />

      <Code code={html} language="html" />
    </Styled.Example>
  )
}

Example.propTypes = {
  html: string.isRequired,
}

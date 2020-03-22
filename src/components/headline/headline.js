import { node, string } from 'prop-types'

import * as Styled from './headline.styled'

export const Headline = ({ heading, children }) => {
  return (
    <Styled.Headline>
      <h2>{heading}</h2>

      <div dangerouslySetInnerHTML={{ __html: children }} />
    </Styled.Headline>
  )
}

Headline.propTypes = {
  heading: string.isRequired,
  children: node.isRequired,
}

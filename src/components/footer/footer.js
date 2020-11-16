import { node } from 'prop-types'

import * as Styled from './footer.styled'

export const Footer = ({ children }) => {
  return (
    <Styled.Footer>
      <Styled.Content>
        <p>Copyright © Jędrzej Chałubek. All rights reserved.</p>
        <p>Source code MIT License. Website CC BY-NC-SA 4.0</p>
      </Styled.Content>
    </Styled.Footer>
  )
}

Footer.propTypes = {
  children: node.isRequired,
}

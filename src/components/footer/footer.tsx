import { forwardRef } from 'react'

import * as Styled from './footer.styled'

export const Footer = forwardRef<HTMLDivElement>(({ ...rest }, ref) => {
  return (
    <Styled.Footer ref={ref} {...rest}>
      <Styled.Content>
        <p>Copyright © Jędrzej Chałubek. All rights reserved.</p>
        <p>Source code MIT License. Website CC BY-NC-SA 4.0</p>
      </Styled.Content>
    </Styled.Footer>
  )
})

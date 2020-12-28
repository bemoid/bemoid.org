import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Button } from 'src/components'

export const ButtonFill = styled(Button)`
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: #fff;
      background-color: #ff5f6d;

      &:hover {
        color: #fff;
        background-color: #ef4e5b;
      }
    `}
`

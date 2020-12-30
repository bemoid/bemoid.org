import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Button } from '.'

export const ButtonFill = styled(Button)<{
  variant: 'primary'
}>`
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

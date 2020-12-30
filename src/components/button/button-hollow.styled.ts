import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Button } from '.'

export const ButtonHollow = styled(Button)<{
  variant: 'primary' | 'neutral'
}>`
  border: 2px solid transparent;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: #ff5f6d;
      border-color: #ff5f6d;

      &:hover {
        background-color: #ff5f6d;
        color: #fff;
      }
    `}

  ${({ variant }) =>
    variant === 'neutral' &&
    css`
      color: #484357;
      border-color: #ebebf2;

      &:hover {
        border-color: #dfdfe5;
      }
    `}
`

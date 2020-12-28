import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(90deg, #0e0a1a 0%, #3c3842 100%);
`

export const Body = styled.div`
  ${({ variant }) =>
    variant.includes('withPadding') &&
    css`
      padding: 27px 18px;

      @media (min-width: 768px) {
        padding: 32px;
      }

      @media (min-width: 992px) {
        padding: 48px 32px;
      }
    `}
`

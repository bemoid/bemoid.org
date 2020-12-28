import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Button = styled.a<{
  size: 'medium' | 'large'
  expand: boolean
}>`
  position: relative;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  line-height: inherit;
  text-decoration: none;
  outline: 0;
  text-align: center;
  font-size: 18px;
  padding: 0.5em 0.8em;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  ${({ size }) =>
    size === 'medium' &&
    css`
      @media (min-width: 768px) {
        padding: 0.6em 1em;
      }
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      @media (min-width: 768px) {
        padding: 0.8em 1.2em;
      }

      @media (min-width: 992px) {
        padding: 1em 1.4em;
      }
    `}

  ${({ expand }) =>
    expand &&
    css`
      display: block;
      width: 100%;
    `}
`

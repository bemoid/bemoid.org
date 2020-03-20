import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const Button = styled.a`
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
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  ${({ size }) => size === 'medium' && css`
    @media (min-width: 768px) {
      padding: 0.6em 1em;
    }
  `}

  ${({ size }) => size === 'large' && css`
    @media (min-width: 768px) {
      padding: 0.8em 1.2em;
    }
  `}

  ${({ expand }) => expand && css`
    display: block;
    width: 100%;
  `}
`

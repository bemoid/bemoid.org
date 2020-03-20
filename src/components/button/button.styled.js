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
  padding: 0.5em 1em;

  ${({ size }) => size === 'medium' && css`
    font-size: 1em;
  `}

  ${({ size }) => size === 'large' && css`
    font-size: 1.25em;
  `}

  ${({ expand }) => expand && css`
    display: block;
    width: 100%;
  `}
`

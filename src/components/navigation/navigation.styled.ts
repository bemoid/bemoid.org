import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Navigation = styled.div`
  font-size: 16px;

  & > * + * {
    margin-top: 21px;
  }
`

export const Group = styled.ul`
  display: block;
  list-style: none;
  padding: 0;

  & > ul {
    margin-top: 6px;
  }
`

export const Heading = styled.li`
  color: #a4a2b3;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`

export const Item = styled.li`
  display: block;
`

export const Link = styled.a<{
  active: boolean
}>`
  position: relative;
  color: #484357;
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -32px;
    width: 3px;
    height: 100%;
    background-color: #d2d2d9;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #484357;

    &:before {
      opacity: 1;
    }
  }

  ${({ active }) =>
    active &&
    css`
      &:before {
        opacity: 1;
        background-color: #ffc371;
      }
    `}
`

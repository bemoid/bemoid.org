import styled from '@emotion/styled'

export const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;

  & > * + * {
    margin-top: 3px;
  }
`

export const Item = styled.li``

export const Icon = styled.span`
  svg {
    fill: #a4a2b3;
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  & > * + * {
    margin-left: 12px;
  }
`

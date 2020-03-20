import styled from '@emotion/styled'

export const List = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  font-size: 27px;
  text-align: center;
`

export const Item = styled.li`
  display: block;
`

export const Link = styled.a`
  color: #ebebf2;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  padding: 9px 0;
  font-weight: 500;
  display: block;

  &:hover {
    color: #fff;
  }
`

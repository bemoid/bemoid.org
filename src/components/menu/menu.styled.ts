import styled from '@emotion/styled'

export const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;

  & > * + * {
    margin-left: 27px;
  }
`

export const Item = styled.li`
  float: left;
  clear: none;
`

export const Link = styled.a`
  color: #ebebf2;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`

import styled from '@emotion/styled'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;
  margin-top: 50px;

  & > * + * {
    margin-top: 9px;
  }
`

export const SubList = styled.ul`
  list-style: none;
  padding-left: 12px;
`

export const Heading = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #a4a2b3;
`

export const Item = styled.li`
  & > * + * {
    margin-top: 6px;
  }
`

export const Link = styled.a`
  display: block;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`

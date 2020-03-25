import styled from '@emotion/styled'

export const SearchResults = styled.div`
  display: block;
`

export const List = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  border-bottom: 1px solid #d2d2d9;

  & > * + * {
    border-top: 1px solid #d2d2d9;
  }
`

export const Item = styled.li`
  display: block;
`

export const Link = styled.a`
  display: block;
  padding: 27px 32px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  & > * + * {
    margin-top: 12px;
  }
`

export const Heading = styled.h4`
  display: flex;
  justify-content: space-between;
  color: #484357;
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
`

export const Badge = styled.span`
  color: #a4a2b3;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`

export const Content = styled.p`
  font-size: 16px;
  overflow-wrap: break-word;

  em {
    background-color: #fff1de;
    padding: 1px 3px;
    border-radius: 2px;
  }
`

export const Message = styled.div`
  padding: 27px 32px;
`

export const Footer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: flex-end;
`

export const Logo = styled.img`
  display: block;
  height: 18px;
`

import styled from '@emotion/styled'

export const SearchResults = styled.div`
  display: block;
  position: absolute;
  z-index: -1;
  top: 100%;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #24202e 0%, #3f3c46 100%);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.2);
  border-top: 1px solid #5d5766;
`

export const List = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  max-height: 360px;
  overflow-y: scroll;
  padding: 21px;

  & > * + * {
    margin-top: 18px;
  }
`

export const Item = styled.li`
  display: block;
`

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`

export const Heading = styled.h4`
  flex: 0 0 125px;
  width: 125px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
  text-align: right;
  margin-right: 21px;
  margin-top: 3px;

  & > * + * {
    margin-top: 9px;
  }
`

export const Badge = styled.span`
  color: #a4a2b3;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`

export const Content = styled.p`
  flex: 1;
  font-size: 16px;
  color: #a4a2b3;
  overflow-wrap: break-word;

  em {
    color: #fff;
    background-color: #575361;
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
  border-top: 1px solid #5d5766;
`

export const Logo = styled.img`
  display: block;
  height: 18px;
`

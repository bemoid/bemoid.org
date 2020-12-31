import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: -6px;

  @media (min-width: 768px) {
    margin: -18px;
  }
`

export const Header = styled.div`
  flex: 0 1 auto;
  padding: 6px;

  @media (min-width: 768px) {
    padding: 18px;
  }
`

export const Body = styled.div`
  flex: 1;
  display: none;

  @media (min-width: 768px) {
    padding: 18px;
    display: block;
  }
`

export const Aside = styled.div`
  flex: 0 1 auto;
  display: none;

  @media (min-width: 992px) {
    padding: 18px;
    display: block;
  }
`

export const Content = styled.p`
  max-width: 360px;
`

export const Heading = styled.h1`
  color: #fff;
`

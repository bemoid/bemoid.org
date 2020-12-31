import styled from '@emotion/styled'

export const Main = styled.main`
  position: relative;
  z-index: 0;
  display: flex;
`

export const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 260px;
  border-right: 1px solid #d2d2d9;

  @media (min-width: 768px) {
    position: static;
    flex: 0 0 260px;
  }
`

export const Wrapper = styled.article`
  flex: 1;
`

export const Body = styled.article`
  display: flex;
`

export const Content = styled.article`
  flex: 1;
  max-width: 900px;
`

export const Aside = styled.aside`
  flex: 1;
  max-width: 200px;
`

export const AsideTrack = styled.div`
  position: sticky;
  top: 36px;
  left: 0;
`

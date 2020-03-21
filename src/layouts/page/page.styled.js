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
  max-width: 300px;
  border-right: 1px solid #d2d2d9;

  @media (min-width: 768px) {
    position: static;
    flex: 0 0 300px;
  }
`

export const Content = styled.article`
  flex: 1;
`

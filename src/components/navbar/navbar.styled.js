import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #5d5766;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #ff5f6d 0%, #ffc371 100%);
  }
`

export const Body = styled.div`
  padding: 18px;

  @media (min-width: 768px) {
    padding: 18px 32px;
  }
`

export const Logo = styled.img`
  display: block;
  width: 21px;
  height: auto;

  @media (min-width: 768px) {
    width: 32px;
  }
`

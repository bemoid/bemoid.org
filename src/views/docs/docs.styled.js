import styled from '@emotion/styled'

export const Content = styled.div`
  padding: 18px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  & > * + * {
    margin-top: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 700;
    margin-bottom: 0.8em;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 27px;
  }

  h3 {
    font-size: 21px;
  }
`

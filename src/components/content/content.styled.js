import styled from '@emotion/styled'

export const Content = styled.div`
  padding: 18px;
  max-width: 960px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  & > * + * {
    margin-top: 1.2em;
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

  code {
    font-size: 14px;
    background-color: #f4f2f5;
    padding: 3px 4px;
    border-radius: 2px;
  }

  pre {
    font-size: 14px;
    line-height: 1.8;
    padding: 18px;
    background-color: #3c3842;
    overflow-x: auto;

    @media (min-width: 768px) {
      padding: 21px;
    }

    code {
      color: #e6e6e8;
      background-color: #3c3842;
    }
  }
`

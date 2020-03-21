import styled from '@emotion/styled'

export const Headline = styled.div`
  background: #e7e6e8;
  color: #8c8b99;
  padding: 18px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  & > * + * {
    margin-top: 3px;

    @media (min-width: 768px) {
      margin-top: 9px;
    }
  }

`

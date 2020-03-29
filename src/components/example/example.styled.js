import styled from '@emotion/styled'

export const Example = styled.div`
  border: 1px solid #ebebf2;
`

export const View = styled.div`
  padding: 18px;

  & > * + * {
    margin-top: 9px;
  }

  .flex,
  .waffle,
  .gutter {
    font-size: 16px;
    line-height: 36px;

    & > * {
      background-color: #f4f2f5;
      text-align: center;
      outline: 1px solid #d2d2d9;
    }
  }
`

import styled from '@emotion/styled'

export const Example = styled.div`
  border: 1px solid #ebebf2;
`

export const View = styled.div`
  padding: 18px;

  .flex,
  .waffle,
  .gutter {
    & > * {
      &::before {
        content: attr(data-text);
        display: block;
        width: 100%;
        height: 100%;
        background-color: #f4f2f5;
        text-align: center;
        outline: 1px solid #d2d2d9;
      }
    }
  }
`

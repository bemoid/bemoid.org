import styled from '@emotion/styled'

export const Navigation = styled.div`
  & > * + * {
    margin-top: 18px;
  }
`

export const Group = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
`

export const Item = styled.li`
  display: block;
`

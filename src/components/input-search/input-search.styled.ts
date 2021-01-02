import styled from '@emotion/styled'

import { Input } from '@/components/input/input'

export const InputSearch = styled(Input)`
  position: relative;
  z-index: 0;
  padding: 14px 27px;
  border: 0;
  color: #fff;
  background: linear-gradient(90deg, #24202e 0%, #3f3c46 100%);
  outline: 0;

  &::placeholder {
    color: #a4a2b3;
  }
`

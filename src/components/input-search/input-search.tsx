import { forwardRef } from 'react'

import * as Styled from './input-search.styled'

export type InputSearchProps = {
  defaultValue?: string
  placeholder?: string
  onChange: (event) => void
}

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ defaultValue = '', placeholder = '', onChange, ...rest }, ref) => {
    return (
      <>
        <Styled.InputSearch
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
      </>
    )
  }
)

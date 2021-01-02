import { forwardRef } from 'react'

import * as Styled from './input.styled'

export type InputProps = {
  defaultValue?: string
  placeholder?: string
  onChange?: (event) => void
  onFocus?: (event) => void
  onBlur?: (event) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { defaultValue = '', placeholder = '', onChange, onFocus, onBlur, ...rest },
    ref
  ) => {
    return (
      <Styled.Input
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        {...rest}
      />
    )
  }
)

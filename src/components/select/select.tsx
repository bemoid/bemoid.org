import { forwardRef } from 'react'

import * as Styled from './select.styled'

export type SelectItemProps = {
  title: string
  value: string
}

export type SelectProps = {
  items: SelectItemProps[]
  value?: string
  onChange?: (event) => void
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ items, value = '', onChange, ...rest }, ref) => {
    return (
      <Styled.Select value={value} onChange={onChange} ref={ref} {...rest}>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </Styled.Select>
    )
  }
)

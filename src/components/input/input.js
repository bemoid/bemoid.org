import { string, func } from 'prop-types'

import * as Styled from './input.styled'

export const Input = ({ defaultValue, placeholder, className, onChange, onFocus, onBlur }) => {
  return (
    <Styled.Input
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

Input.propTypes = {
  defaultValue: string,
  placeholder: string,
  className: string,
  onChange: func,
  onFocus: func,
  onBlur: func,
}

Input.defaultProps = {
  defaultValue: '',
  placeholder: '',
  className: '',
  onChange: () => { },
  onFocus: () => { },
  onBlur: () => { },
}

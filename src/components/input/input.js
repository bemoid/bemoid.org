import { string, func } from 'prop-types'

import * as Styled from './input.styled'

export const Input = ({ defaultValue, placeholder, className, onChange }) => {
  return (
    <Styled.Input
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  defaultValue: string,
  placeholder: string,
  className: string,
  onChange: func,
}

Input.defaultProps = {
  defaultValue: '',
  placeholder: '',
  className: '',
  onChange: () => {},
}

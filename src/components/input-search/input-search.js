import { string, func } from 'prop-types'

import * as Styled from './input-search.styled'

export const InputSearch = ({ defaultValue, placeholder, className, onChange }) => {
  return (
    <Styled.InputSearch
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  )
}

InputSearch.propTypes = {
  defaultValue: string,
  placeholder: string,
  className: string,
  onChange: func,
}

InputSearch.defaultProps = {
  defaultValue: '',
  placeholder: '',
  className: '',
  onChange: () => {},
}

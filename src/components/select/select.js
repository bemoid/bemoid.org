import { arrayOf, object, string, bool, func } from 'prop-types'

import * as Styled from './select.styled'

export const Select = ({
  items,
  size,
  expand,
  className,
  value,
  onChange,
}) => {
  return (
    <Styled.Select
      size={size}
      expand={expand}
      className={className}
      value={value}
      onChange={onChange}
    >
      {items.map((item, index) => (
        <option
          key={index}
          value={item.value}
        >
          {item.title}
        </option>
      ))}
    </Styled.Select>
  )
}

Select.propTypes = {
  items: arrayOf(object).isRequired,
  size: string,
  expand: bool,
  className: string,
  value: string,
  onChange: func,
}

Select.defaultProps = {
  size: 'medium',
  className: '',
  value: '',
  expand: false,
  onChange: () => {},
}

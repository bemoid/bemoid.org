import { arrayOf, object, string, bool, func } from 'prop-types'

import * as Styled from './select.styled'

export const Select = ({
  items,
  size,
  expand,
  className,
  defaultValue,
  onChange,
}) => {
  return (
    <Styled.Select
      size={size}
      expand={expand}
      className={className}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {items.map((item, index) => (
        <option
          key={index}
          value={item.value}
          selected={item.selected}
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
  defaultValue: string,
  onChange: func,
}

Select.defaultProps = {
  size: 'medium',
  className: '',
  defaultValue: '',
  expand: false,
  onChange: () => {},
}

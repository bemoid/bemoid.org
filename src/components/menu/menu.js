import { arrayOf, shape, string } from 'prop-types'

import * as Styled from './menu.styled'

export const Menu = ({ items, className }) => {
  return (
    <Styled.List
      className={className}
    >
      {items.map((item, index) => (
        <Styled.Item key={index}>
          <Styled.Link href={item.href}>
            {item.title}
          </Styled.Link>
        </Styled.Item>
      ))}
    </Styled.List>
  )
}

Menu.propTypes = {
  items: arrayOf(shape({
    title: string.isRequired,
    href: string.isRequired,
  })),
  className: string,
}

Menu.defaultProps = {
  items: [],
  className: '',
}

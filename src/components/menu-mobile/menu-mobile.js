import { arrayOf, shape, string } from 'prop-types'

import * as Styled from './menu-mobile.styled.'

export const MenuMobile = ({ items, className }) => {
  return (
    <Styled.MenuMobile
      className={className}
    >
      {items.map((item, index) => (
        <Styled.Item key={index}>
          <Styled.Link href={item.href}>
            {item.title}
          </Styled.Link>
        </Styled.Item>
      ))}
    </Styled.MenuMobile>
  )
}

MenuMobile.propTypes = {
  items: arrayOf(shape({
    title: string.isRequired,
    href: string.isRequired,
  })),
  className: string,
}

MenuMobile.defaultProps = {
  items: [],
  className: '',
}

import { arrayOf, shape, string } from 'prop-types'

import * as Styled from './navigation.styled'

export const Navigation = ({ items, className }) => {
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

Navigation.propTypes = {
  items: arrayOf(shape({
    title: string.isRequired,
    href: string.isRequired,
  })),
  className: string,
}

Navigation.defaultProps = {
  items: [],
  className: '',
}

import { object, arrayOf } from 'prop-types'

import * as Styled from './navigation-icons.styled'

export const NavigationIcons = ({ items }) => {
  return (
    <Styled.Navigation>
      {items.map((item, index) => (
        <Styled.Item key={index}>
          <Styled.Link href={item.href}>
            <Styled.Icon>{item.icon}</Styled.Icon> <span>{item.title}</span>
          </Styled.Link>
        </Styled.Item>
      ))}
    </Styled.Navigation>
  )
}

NavigationIcons.propTypes = {
  items: arrayOf(object).isRequired,
}

import { object, arrayOf } from 'prop-types'

import * as Styled from './navigation.styled'

export const Navigation = ({ items }) => {
  return (
    <Styled.Navigation>
      {items.map((group) => (
        <Styled.Group key={group.name}>
          <li><b>{group.name}</b></li>

          <Styled.Group>
            {group.items.map((item, index) => (
              <li key={index}>{item.attributes.title}</li>
            ))}
          </Styled.Group>
        </Styled.Group>
      ))}
    </Styled.Navigation>
  )
}

Navigation.propTypes = {
  items: arrayOf(object).isRequired,
}

Navigation.defaultProps = {
  search: [],
}

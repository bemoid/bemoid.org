import { object, arrayOf } from 'prop-types'
import { useRouter } from 'next/router'

import * as Styled from './navigation.styled'

export const Navigation = ({ items }) => {
  const router = useRouter()

  return (
    <Styled.Navigation>
      {items.map((group) => (
        <Styled.Group key={group.name}>
          <Styled.Heading>{group.name}</Styled.Heading>

          <Styled.Group>
            {group.items.map((item, index) => (
              <Styled.Item key={index}>
                <Styled.Link
                  href={item.href}
                  active={item.href === router.asPath}
                >
                  {item.title}
                </Styled.Link>
              </Styled.Item>
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

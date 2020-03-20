import * as Styled from './hamburger.styled'

import { string, func } from 'prop-types'

export const Hamburger = ({ className, onClick }) => {
  return (
    <Styled.Hamburger
      onClick={onClick}
      className={className}
    >
      <svg width="25" height="22" viewBox="0 0 30 26" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 11.19h30v2.62H0zM0 23.194h30v2.613H0zM0 .19h30v2.62H0z"/>
      </svg>
    </Styled.Hamburger>
  )
}

Hamburger.propTypes = {
  className: string,
  onClick: func,
}

Hamburger.defaultProps = {
  className: '',
  onClick: () => {},
}

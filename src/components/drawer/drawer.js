import { bool, string, node } from 'prop-types'

import * as Styled from './drawer.styled'

export const Drawer = ({ active, className, children }) => {
  return (
    <Styled.Drawer
      active={active}
      className={className}
    >
      {children}
    </Styled.Drawer>
  )
}

Drawer.propTypes = {
  active: bool,
  className: string,
  children: node.isRequired,
}

Drawer.defaultProps = {
  active: false,
  className: '',
}

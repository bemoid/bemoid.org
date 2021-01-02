import { forwardRef, ReactElement } from 'react'

import * as Styled from './drawer.styled'

export type DrawerProps = {
  active?: boolean
  children: ReactElement
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ active = false, children, ...rest }, ref) => {
    return (
      <Styled.Drawer active={active} ref={ref} {...rest}>
        {children}
      </Styled.Drawer>
    )
  }
)

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Drawer } from 'src/components/drawer/drawer'
import { Hamburger } from 'src/components/hamburger/hamburger'

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #ff5f6d 0%, #ffc371 100%);
  }
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  border-bottom: 1px solid #5d5766;
  background: linear-gradient(90deg, #0e0a1a 0%, #3c3842 100%);
  margin-left: -15px;
  margin-right: -15px;

  @media (min-width: 768px) {
    padding: 18px 32px;
  }
`

export const AsideStart = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    min-width: 227px;
  }

  & > * + * {
    margin-left: 27px;
  }
`

export const Content = styled.div`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const AsideEnd = styled.div`
  flex: 0 1 auto;
  text-align: right;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    min-width: 170px;
  }
`

export const Logo = styled.img`
  display: block;
  width: 21px;
  height: auto;

  @media (min-width: 768px) {
    width: 32px;
  }
`

export const Button = styled(Hamburger)`
  display: inline-block;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Sidebar = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
  }
`

export const Offcanvas = styled(Drawer)`
  position: absolute;
  top: 74px;
  left: 0;
  z-index: -1;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }

  ${({ active }) =>
    active &&
    css`
      transform: translateY(0);
      box-shadow: 0px 12px 18px 0px rgba(0, 0, 0, 0.2);
    `}
`

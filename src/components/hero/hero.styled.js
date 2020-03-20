import styled from '@emotion/styled'

import { ButtonHollow } from '@src/components'

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  padding: 0 18px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 740px;
  padding-top: 40px;
  padding-bottom: 60px;
  margin-left: -30px;
  margin-right: -30px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 60px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 140px;
    padding-bottom: 120px;
    max-width: 900px;
  }

  & > * {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -9px;
  margin-bottom: -9px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  & > * {
    padding-top: 9px;
    padding-bottom: 9px;
  }
`

export const Aside = styled.div`
  flex: 0 1 auto;
  display: none;
  align-items: end;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const Heading = styled.h1`
  flex: 0 1 auto;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 85px;
  }

  @media (min-width: 992px) {
    font-size: 95px;
  }
`

export const Content = styled.p`
  flex: 1;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 992px) {
    font-size: 27px;
  }
`

export const Details = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: start;
  }

  & > * + * {
    margin-left: 18px;
  }
`

export const Button = styled(ButtonHollow)`
  @media (max-width: 768px) {
    color: #fff;
    border-color: #5d5766;
  }
`

export const Image = styled.img`
  width: 150px;
  max-width: 100%;
  height: auto;
  display: block;

  @media (min-width: 768px) {
    width: 220px;
  }

  @media (min-width: 992px) {
    width: 250px;
  }
`

export const Ground = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 100%;
  min-width: 768px;
  transform: translateX(-50%);
  z-index: -1;
  margin-top: -20px;

  @media (min-width: 768px) {
    min-width: 1280px;
    margin-top: -220px;
  }

  @media (min-width: 992px) {
    margin-top: -300px;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`

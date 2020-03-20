import { string } from 'prop-types'

import { ButtonFill } from '@src/components'

import * as Styled from './hero.styled'

export const Hero = ({ heading, content }) => {
  return (
    <Styled.Wrapper>
      <Styled.Body>
        <Styled.Main>
          <Styled.Heading>{heading}</Styled.Heading>

          <Styled.Content>{content}</Styled.Content>

          <Styled.Details>
            <ButtonFill
              size="large"
              href="https://github.com/bemoid/bemoid/"
            >
              Get Started
            </ButtonFill>

            <span>or</span>

            <Styled.Button
              size="large"
              variant="neutral"
              href="https://github.com/bemoid/bemoid/"
            >
              Visit Github
            </Styled.Button>
          </Styled.Details>
        </Styled.Main>

        <Styled.Aside>
          <Styled.Image src='/images/bemoid-mascot.svg' alt='Bemoid - Robot Mascot' />
        </Styled.Aside>
      </Styled.Body>

      <Styled.Ground>
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="508" viewBox="0 0 1280 508">
          <path clipRule="evenodd" fill="#fff" d="M1141.354 36.383L1124.763 25l-46.644-3-6.402 8.296c-38.406-2.989-79.089-5.592-121.678-7.761L944 17l-47-1-7.002 3.819a5938.276 5938.276 0 00-89.294-2.867L793 12l-67-3-15-9h-60l-35.948 15.048c-156.498.58-301.602 6.592-422.69 16.521L166 17l-23 6-46 5-13.783 14.334C53.019 45.894 25.182 49.742 0 53.839V508.86h1280V53.842c-39.934-6.498-86.548-12.368-138.646-17.459z"/>
        </svg>
      </Styled.Ground>
    </Styled.Wrapper>
  )
}

Hero.propTypes = {
  heading: string.isRequired,
  content: string.isRequired,
}

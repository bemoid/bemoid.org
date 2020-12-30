import { screen, render, fireEvent } from '@testing-library/react'

import { Button, ButtonFill, ButtonHollow } from '..'

describe('Buttons components', () => {
  it('matches snapshot', () => {
    const { asFragment: fragmentButton } = render(
      <Button href="https://bemoid.org/">Button</Button>
    )
    const { asFragment: fragmentButtonFill } = render(
      <ButtonFill href="https://bemoid.org/">Button Fill</ButtonFill>
    )
    const { asFragment: fragmentButtonHollow } = render(
      <ButtonHollow href="https://bemoid.org/">Button Fill</ButtonHollow>
    )

    expect(fragmentButton()).toMatchSnapshot()
    expect(fragmentButtonFill()).toMatchSnapshot()
    expect(fragmentButtonHollow()).toMatchSnapshot()
  })

  it('calls `onClick` event', () => {
    const handleClick = jest.fn()

    render(
      <Button href="https://bemoid.org/" onClick={handleClick}>
        Button
      </Button>
    )

    const button = screen.getByTestId('button')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})

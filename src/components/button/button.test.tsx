import { screen, render, fireEvent } from '@testing-library/react'

import { Button } from './button'

describe('Button component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Button href="https://bemoid.org/">Button</Button>
    )

    expect(asFragment()).toMatchSnapshot()
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

import { render } from '@testing-library/react'

import { Callout } from '..'

describe('Callout component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Callout heading="Heading">Content</Callout>)

    expect(asFragment()).toMatchSnapshot()
  })
})

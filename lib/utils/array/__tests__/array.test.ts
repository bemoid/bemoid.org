import { groupBy, sortBy } from '../array'

describe('Array`s utility', () => {
  it('`sortBy` sorts collection of objects by object property', () => {
    const sorted = sortBy(
      [
        { title: 'Item #B', group: 'b' },
        { title: 'Item #C', group: 'c' },
        { title: 'Item #A', group: 'a' },
      ],
      (item) => item.group
    )

    expect(sorted).toStrictEqual([
      { title: 'Item #A', group: 'a' },
      { title: 'Item #B', group: 'b' },
      { title: 'Item #C', group: 'c' },
    ])
  })

  it('`groupBy` groups collection of objects by object property', () => {
    const grouped = groupBy(
      [
        { title: 'Item #1', group: 'group1' },
        { title: 'Item #2', group: 'group1' },
        { title: 'Item #3', group: 'group2' },
      ],
      (item) => item.group
    )

    expect(grouped).toStrictEqual([
      {
        name: 'group1',
        items: [
          { title: 'Item #1', group: 'group1' },
          { title: 'Item #2', group: 'group1' },
        ],
      },
      {
        name: 'group2',
        items: [{ title: 'Item #3', group: 'group2' }],
      },
    ])
  })
})

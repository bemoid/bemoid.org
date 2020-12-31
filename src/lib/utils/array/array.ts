export const groupBy = <T, G>(data: T[], accessor: (o: T) => string): G[] => {
  const dataset = data.reduce((storage, item) => {
    var group = accessor(item)

    storage[group] = storage[group] || {
      name: group,
      items: [],
    }

    storage[group].items.push(item)

    return storage
  }, {})

  return Object.keys(dataset).map((set) => {
    return dataset[set]
  })
}

export const sortBy = <T>(data: T[], accessor: (o: T) => string): T[] => {
  return data.sort((a, b) => {
    if (accessor(a) < accessor(b)) return -1
    if (accessor(a) > accessor(b)) return 1

    return 0
  })
}

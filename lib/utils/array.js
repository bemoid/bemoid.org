exports.groupBy = (data, accessor) => {
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

exports.sortBy = (data, accessor) => {
  return data.sort((a, b) => {
    if (accessor(a) < accessor(b)) return -1
    if (accessor(a) > accessor(b)) return 1

    return 0
  })
}

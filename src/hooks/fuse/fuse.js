import Fuse from 'fuse.js'
import { useState } from 'react'

export const useFuse = ({ data, options }) => {
  const [term, setTerm] = useState('')

  const fuse = new Fuse(data, {
    threshold: 0.3,
    ...options
  })
  const results = fuse.search(`${term}`)

  return [results, setTerm]
}

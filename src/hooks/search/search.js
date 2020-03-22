import algoliaClient from 'algoliasearch/lite'
import { useState, useEffect } from 'react'

export const useSearch = (version) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const algolia = algoliaClient(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_KEY
  ).initIndex(`${process.env.ALGOLIA_INDEX_PREFIX}_${version}`)

  const search = (query, params = {}) => {
    return algolia.search(query, {
      ...params,
    })
  }

  useEffect(() => {
    setLoading(true)

    search(query).then(({ hits }) => {
      setResults(hits)
      setLoading(false)
    })
  }, [query])

  return { query, results, loading, setQuery }
}

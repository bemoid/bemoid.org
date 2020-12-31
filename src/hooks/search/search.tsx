import { useState, useEffect } from 'react'
import algoliaClient from 'algoliasearch/lite'

export const useSearch = (version: string) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const algolia = algoliaClient(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_KEY
  ).initIndex(`${process.env.ALGOLIA_INDEX_PREFIX}_${version}`)

  const search = (query: string, params: object = {}) => {
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

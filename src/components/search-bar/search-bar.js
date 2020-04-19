import { useContext } from 'react'

import { useSearch } from '@src/hooks'
import { CurrentVersionContext } from '@src/contexts'
import { InputSearch, SearchResults } from '@src/components'

import * as Styled from './search-bar.styled'

export const SearchBar = () => {
  const { currentVersion } = useContext(CurrentVersionContext)

  const { results, loading, query, setQuery } = useSearch(currentVersion)

  return (
    <Styled.SearchBar>
      <InputSearch
        placeholder="Search documentation ..."
        onChange={(event) => setQuery(event.target.value)}
      />

      {(query) && (
        <SearchResults loading={loading} results={results.map((item) => {
          item.href = `/docs/${currentVersion}/${item.attributes.slug}`

          return item
        })} />
      )}
    </Styled.SearchBar>
  )
}

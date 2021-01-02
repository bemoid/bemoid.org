import { useContext, forwardRef } from 'react'

import { useSearch } from '@/hooks'
import { CurrentVersionContext } from '@/contexts'
import { InputSearch, SearchResults } from '@/components'

import * as Styled from './search-bar.styled'

export const SearchBar = forwardRef<HTMLDivElement>(({ ...rest }, ref) => {
  const { currentVersion } = useContext(CurrentVersionContext)

  const { results, loading, query, setQuery } = useSearch(currentVersion)

  return (
    <Styled.SearchBar ref={ref} {...rest}>
      <InputSearch
        placeholder="Search documentation ..."
        onChange={(event) => setQuery(event.target.value)}
      />

      {query && (
        <SearchResults
          loading={loading}
          results={results.map((item) => {
            item.href = `/docs/${currentVersion}/${item.attributes.slug}`

            return item
          })}
        />
      )}
    </Styled.SearchBar>
  )
})

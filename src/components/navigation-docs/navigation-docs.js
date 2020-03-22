import { useContext } from 'react'

import { useSearch } from '@src/hooks'
import { Navigation, InputSearch, SearchResults } from '@src/components'
import { CurrentVersionContext, DocsByGroupContext } from '@src/contexts'

import * as Styled from './navigation-docs.styled'

export const NavigationDocs = () => {
  const { docsByGroup } = useContext(DocsByGroupContext)
  const { currentVersion } = useContext(CurrentVersionContext)

  const { results, loading, query, setQuery } = useSearch(currentVersion)

  return (
    <Styled.NavigationDocs>
      <InputSearch
        placeholder="Search documentation ..."
        onChange={(event) => setQuery(event.target.value)}
      />

      {(query) ? (
        <SearchResults loading={loading} results={results.map((item) => {
          item.href = `/docs/${currentVersion}/${item.attributes.slug}`

          return item
        })} />
      ) : (
        <Navigation items={docsByGroup.map((group) => ({
          name: group.name,
          items: group.items.map((item) => ({
            title: item.attributes.title,
            href: `/docs/${currentVersion}/${item.attributes.slug}`,
          })),
        }))} />
      )}
    </Styled.NavigationDocs>
  )
}

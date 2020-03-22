import { useState, useEffect, useContext } from 'react'

import { useFuse } from '@src/hooks'
import { Navigation } from '@src/components'
import { DocsContext, DocsByGroupContext } from '@src/contexts'

export const NavigationDocs = () => {
  const { docs } = useContext(DocsContext)
  const { docsByGroup } = useContext(DocsByGroupContext)

  const [searchQuery, setSearchQuery] = useState('')
  const [results, search] = useFuse({
    data: docs,
    options: {
      keys: [
        { name: 'attributes.title', weight: 0.7 },
        { name: 'attributes.description', weight: 0.5 },
        { name: 'body', weight: 0.3 },
        { name: 'attributes.group', weight: 0.1 }
      ],
    },
  })

  useEffect(() => {
    search(searchQuery)
  }, [searchQuery])

  return (
    <>
      <input
        placeholder="Search..."
        onChange={(event) => setSearchQuery(event.target.value)}
      />

      {(searchQuery) ? (
        <p>{searchQuery}</p>
      ) : (
        <Navigation items={docsByGroup} />
      )}
    </>
  )
}

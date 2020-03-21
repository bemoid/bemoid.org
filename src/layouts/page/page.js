import Fuse from 'fuse.js'
import { useState, useEffect } from 'react'
import { object, string, node } from 'prop-types'

import { Layout } from '@src/layouts'
import { Header, Callout, Navigation } from '@src/components'

import * as Styled from './page.styled'

function useFuse ({ data, options }) {
  const [term, setTerm] = useState('')

  const fuse = new Fuse(data, {
    threshold: 0.3,
    ...options
  })
  const results = fuse.search(`${term}`)

  return [results, setTerm]
}

export const PageLayout = ({
  title,
  description,
  heading,
  excerpt,
  context,
  children
}) => {
  const { versions, currentVersion, allDocs, allDocsByGroup } = context

  const [searchQuery, setSearchQuery] = useState('')
  const [results, search] = useFuse({
    data: allDocs,
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
    <Layout
      title={title}
      description={description}
      context={context}
    >
      <Header
        versions={versions}
        currentVersion={currentVersion}
        variant={['withPadding']}
      >
        <Callout heading={heading}>{excerpt}</Callout>
      </Header>

      <Styled.Main>
        <Styled.Sidebar>
          <input
            placeholder="Search..."
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          {(searchQuery) ? (
            <p>{searchQuery}</p>
          ) : (
            <Navigation items={allDocsByGroup} />
          )}
        </Styled.Sidebar>

        <Styled.Content>
          {children}
        </Styled.Content>
      </Styled.Main>
    </Layout>
  )
}

PageLayout.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  heading: string.isRequired,
  excerpt: string.isRequired,
  context: object.isRequired,
  children: node.isRequired,
}

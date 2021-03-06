import { forwardRef } from 'react'

import { DocsInterface } from '@/interfaces/docs'

import * as Styled from './search-results.styled'

export type SearchResultsItem = DocsInterface & {
  href: string
  _highlightResult: {
    body: {
      value: string
    }
  }
}

export type SearchResultsProps = {
  results: SearchResultsItem[]
  loading: boolean
}

const preview = (string: string): string => {
  const match = /<\s*em[^>]*>(.*?)<\s*\/\s*em>/.exec(string)

  if (match) {
    const start = match.index
    const end = start + match[0].length

    const offset = 100 - match[0].length
    const offsetedStart = Math.max(0, start - offset)
    const offsetedEnd = Math.min(string.length, end + offset)

    return string.slice(offsetedStart, offsetedEnd)
  }

  return string.slice(0, 100)
}

export const SearchResults = forwardRef<HTMLDivElement, SearchResultsProps>(
  ({ results, loading, ...rest }, ref) => {
    return (
      <Styled.SearchResults ref={ref} {...rest}>
        {!loading && (
          <>
            {results.length > 0 ? (
              <Styled.List>
                {results.map((result, index) => (
                  <Styled.Item key={index}>
                    <Styled.Link href={result.href}>
                      <Styled.Heading>
                        <Styled.Badge>{result.attributes.group}</Styled.Badge>

                        <div>{result.attributes.title}</div>
                      </Styled.Heading>

                      <Styled.Content
                        dangerouslySetInnerHTML={{
                          __html: preview(result._highlightResult.body.value),
                        }}
                      />
                    </Styled.Link>
                  </Styled.Item>
                ))}
              </Styled.List>
            ) : (
              <Styled.List>
                <Styled.Item>
                  <Styled.Message>No results found</Styled.Message>
                </Styled.Item>
              </Styled.List>
            )}

            <Styled.Footer>
              <Styled.Logo src="/images/algolia-search-by-logo.svg" />
            </Styled.Footer>
          </>
        )}
      </Styled.SearchResults>
    )
  }
)

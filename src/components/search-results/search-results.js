import { object, bool, arrayOf } from 'prop-types'

import * as Styled from './search-results.styled'

export const SearchResults = ({ results, loading }) => {
  const preview = (string) => {
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

  return (
    <Styled.SearchResults>
      {!loading && (
        <>
          {(results.length > 0) ? (
            <Styled.List>
              {results.map((result, index) => (
                <Styled.Item key={index}>
                  <Styled.Link href={result.href}>
                    <Styled.Heading>
                      {result.attributes.title} <Styled.Badge>{result.attributes.group}</Styled.Badge>
                    </Styled.Heading>

                    <Styled.Content dangerouslySetInnerHTML={{ __html: preview(result._highlightResult.body.value) }} />
                  </Styled.Link>
                </Styled.Item>
              ))}
            </Styled.List>
          ) : (
            <Styled.List>
              <Styled.Item>
                <Styled.Message>
                  No results found
                </Styled.Message>
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

SearchResults.propTypes = {
  results: arrayOf(object).isRequired,
  loading: bool,
}

SearchResults.defaultProps = {
  loading: false,
}

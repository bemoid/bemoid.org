import { object, arrayOf } from 'prop-types'

import * as Styled from './search-results.styled'

export const SearchResults = ({ results }) => {
  return (
    <Styled.SearchResults>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h4>{result.attributes.title}</h4>

            <div dangerouslySetInnerHTML={{ __html: result.attributes.description }} />
          </li>
        ))}
      </ul>
    </Styled.SearchResults>
  )
}

SearchResults.propTypes = {
  results: arrayOf(object).isRequired,
}

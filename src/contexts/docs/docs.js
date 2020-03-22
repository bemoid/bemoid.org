import { node, object, arrayOf } from 'prop-types'
import { createContext, useState } from 'react'

export const DocsContext = createContext()

export const DocsContextProvider = ({ value, children }) => {
  const [docs, setDocs] = useState(value)

  return (
    <DocsContext.Provider value={{ docs, setDocs }}>
      {children}
    </DocsContext.Provider>
  )
}

DocsContextProvider.propTypes = {
  value: arrayOf(object).isRequired,
  children: node.isRequired,
}

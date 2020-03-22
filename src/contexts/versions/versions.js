import { node, string, arrayOf } from 'prop-types'
import { createContext, useState } from 'react'

export const VersionsContext = createContext()

export const VersionsContextProvider = ({ value, children }) => {
  const [versions, setVersions] = useState(value)

  return (
    <VersionsContext.Provider value={{ versions, setVersions }}>
      {children}
    </VersionsContext.Provider>
  )
}

VersionsContextProvider.propTypes = {
  value: arrayOf(string).isRequired,
  children: node.isRequired,
}

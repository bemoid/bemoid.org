import { node, string } from 'prop-types'
import { createContext, useState } from 'react'

export const CurrentVersionContext = createContext()

export const CurrentVersionContextProvider = ({ value, children }) => {
  const [currentVersion, setCurrentVersion] = useState(value)

  return (
    <CurrentVersionContext.Provider value={{ currentVersion, setCurrentVersion }}>
      {children}
    </CurrentVersionContext.Provider>
  )
}

CurrentVersionContextProvider.propTypes = {
  value: string.isRequired,
  children: node.isRequired,
}

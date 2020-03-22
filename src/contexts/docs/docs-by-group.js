import { node, object, arrayOf } from 'prop-types'
import { createContext, useState } from 'react'

export const DocsByGroupContext = createContext()

export const DocsByGroupContextProvider = ({ value, children }) => {
  const [docsByGroup, setDocsByGroup] = useState(value)

  return (
    <DocsByGroupContext.Provider value={{ docsByGroup, setDocsByGroup }}>
      {children}
    </DocsByGroupContext.Provider>
  )
}

DocsByGroupContextProvider.propTypes = {
  value: arrayOf(object).isRequired,
  children: node.isRequired,
}

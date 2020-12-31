import { createContext, useState, FC } from 'react'

export type VersionsContextProviderProps = {
  value: string[]
}

export const VersionsContext = createContext(null)

export const VersionsContextProvider: FC<VersionsContextProviderProps> = ({
  value,
  children,
}) => {
  const [versions, setVersions] = useState(value)

  return (
    <VersionsContext.Provider value={{ versions, setVersions }}>
      {children}
    </VersionsContext.Provider>
  )
}

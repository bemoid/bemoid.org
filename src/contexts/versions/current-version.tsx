import { createContext, useState, FC } from 'react'

export type CurrentVersionContextProviderProps = {
  value: string
}

export const CurrentVersionContext = createContext(null)

export const CurrentVersionContextProvider: FC<CurrentVersionContextProviderProps> = ({
  value,
  children,
}) => {
  const [currentVersion, setCurrentVersion] = useState(value)

  return (
    <CurrentVersionContext.Provider
      value={{ currentVersion, setCurrentVersion }}
    >
      {children}
    </CurrentVersionContext.Provider>
  )
}

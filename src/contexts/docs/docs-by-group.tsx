import { createContext, useState, FC } from 'react'

import type { DocsGroupInterface } from '@/interfaces/docs'

export type DocsContextProviderProps = {
  value: DocsGroupInterface[]
}

export const DocsByGroupContext = createContext(null)

export const DocsByGroupContextProvider: FC<DocsContextProviderProps> = ({
  value,
  children,
}) => {
  const [docsByGroup, setDocsByGroup] = useState(value)

  return (
    <DocsByGroupContext.Provider value={{ docsByGroup, setDocsByGroup }}>
      {children}
    </DocsByGroupContext.Provider>
  )
}

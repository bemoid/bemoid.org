import { createContext, useState, FC } from 'react'

import type { DocsInterface } from '@/interfaces/docs'

export type DocsContextProviderProps = {
  value: DocsInterface[]
}

export const DocsContext = createContext(null)

export const DocsContextProvider: FC<DocsContextProviderProps> = ({
  value,
  children,
}) => {
  const [docs, setDocs] = useState(value)

  return (
    <DocsContext.Provider value={{ docs, setDocs }}>
      {children}
    </DocsContext.Provider>
  )
}

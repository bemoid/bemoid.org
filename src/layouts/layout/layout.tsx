import { FC } from 'react'
import { useContext } from 'react'

import { Head } from 'src/layouts'
import { Footer } from 'src/components'
import { CurrentVersionContext } from 'src/contexts'

import * as Styled from './layout.styled'

export type LayoutProps = {
  title?: string
  description?: string
}

export const Layout: FC<LayoutProps> = ({ title, description, children }) => {
  const { currentVersion } = useContext(CurrentVersionContext)

  return (
    <Styled.Layout>
      <Head
        title={title}
        description={description}
        currentVersion={currentVersion}
      />

      {children}

      <Footer />
    </Styled.Layout>
  )
}

import { forwardRef } from 'react'
import { useRouter } from 'next/router'

import * as Styled from './select-version.styled'

export type SelectVersionProps = {
  versions: string[]
  currentVersion: string
}

export const SelectVersion = forwardRef<HTMLSelectElement, SelectVersionProps>(
  ({ versions, currentVersion, ...rest }, ref) => {
    const router = useRouter()

    const redirectHandler = (version: string) => {
      let url = ''

      if (Array.isArray(router.query.path)) {
        const path = router.query.path

        path[0] = version

        url = router.pathname.replace('[...path]', path.join('/'))
      } else {
        url = router.pathname.replace('[path]', `${version}`)
      }

      window.location.replace(url)
    }

    return (
      <Styled.SelectVersion
        items={versions.map((version) => ({
          title: `v${version}`,
          value: `${version}`,
        }))}
        value={currentVersion}
        onChange={(event) => {
          redirectHandler(event.target.value)
        }}
        ref={ref}
        {...rest}
      />
    )
  }
)

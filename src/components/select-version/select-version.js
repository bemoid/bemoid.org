import { useRouter } from 'next/router'
import { arrayOf, string } from 'prop-types'

import * as Styled from './select-version.styled'

export const SelectVersion = ({
  versions,
  currentVersion,
  className,
}) => {
  const router = useRouter()

  const redirectHandler = (version) => {
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
      className={className}
      value={currentVersion}
      onChange={(event) => {
        redirectHandler(event.target.value)
      }}
    />
  )
}

SelectVersion.propTypes = {
  versions: arrayOf(string).isRequired,
  currentVersion: string.isRequired,
  className: string,
}

SelectVersion.defaultProps = {
  className: '',
}

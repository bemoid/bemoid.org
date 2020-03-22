import { arrayOf, string, bool, func } from 'prop-types'

import { useRouter } from 'next/router'

import * as Styled from './select-version.styled'

export const SelectVersion = ({
  versions,
  currentVersion,
  className,
}) => {
  const router = useRouter()

  const redirectHandler = (version) => {
    let path = ''

    if (Array.isArray(router.query.path)) {
      const slug = router.query.path.join('/')

      path = router.pathname.replace('[...path]', `${version}/${slug}`)
    } else {
      path = router.pathname.replace('[path]', `${version}`)
    }

    window.location.replace(path)
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

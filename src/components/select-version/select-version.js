import { arrayOf, string, bool, func } from 'prop-types'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import * as Styled from './select-version.styled'

export const SelectVersion = ({
  versions,
  currentVersion,
  size,
  expand,
  className,
}) => {
  const router = useRouter()
  const [version, setVersion] = useState(currentVersion)

  useEffect(() => {
    let path = ''

    if (Array.isArray(router.query.path) && router.query.path.length > 1) {
      let [, slug] = router.query.path

      path = router.pathname.replace('[...path]', `${version}/${slug}`)
    } else {
      path = router.pathname.replace('[path]', `${version}`)
    }

    router.push(router.pathname, path)
  }, [version])

  return (
    <Styled.SelectVersion
      items={versions.map((version) => ({
        title: `v${version}`,
        value: `${version}`,
      }))}
      size={size}
      expand={expand}
      className={className}
      value={version}
      onChange={(event) => setVersion(event.target.value)}
    />
  )
}

SelectVersion.propTypes = {
  versions: arrayOf(string).isRequired,
  currentVersion: string.isRequired,
  size: string,
  expand: bool,
  className: string,
  onChange: func,
}

SelectVersion.defaultProps = {
  size: 'medium',
  className: '',
  expand: false,
  onChange: () => {},
}

import { arrayOf, string, bool, func } from 'prop-types'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as Styled from './select-version.styled'

export const SelectVersion = ({
  versions,
  currentVersion,
  onChange,
  size,
  expand,
  className,
}) => {
  const router = useRouter()

  useEffect(() => {
    let path = ''

    if (Array.isArray(router.query.path) && router.query.path.length > 1) {
      let [, slug] = router.query.path

      path = router.pathname.replace('[...path]', `${currentVersion}/${slug}`)
    } else {
      path = router.pathname.replace('[path]', `${currentVersion}`)
    }

    router.push(router.pathname, path)
  }, [currentVersion])

  return (
    <Styled.SelectVersion
      items={versions.map((version) => ({
        title: `v${version}`,
        value: `${version}`,
      }))}
      size={size}
      expand={expand}
      className={className}
      value={currentVersion}
      onChange={(event) => onChange(event.target.value)}
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

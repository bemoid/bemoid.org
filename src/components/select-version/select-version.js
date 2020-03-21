import { arrayOf, string, bool, func } from 'prop-types'

import Router, { useRouter } from 'next/router'

import * as Styled from './select-version.styled'

export const SelectVersion = ({
  versions,
  currentVersion,
  size,
  expand,
  className,
}) => {
  const { pathname, query } = useRouter()

  const onChange = (event) => {
    const slug = query.slug[1]
    const version = event.target.value

    Router.push(pathname, pathname.replace('[...slug]', `${version}/${slug}`))
  }

  return (
    <Styled.SelectVersion
      items={versions.map((version) => ({
        title: `v${version}`,
        value: `${version}`,
      }))}
      size={size}
      expand={expand}
      className={className}
      defaultValue={currentVersion}
      onChange={onChange}
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

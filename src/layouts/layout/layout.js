import { node } from 'prop-types'

export const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

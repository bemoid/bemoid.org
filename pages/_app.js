import { object, elementType } from 'prop-types'

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
}

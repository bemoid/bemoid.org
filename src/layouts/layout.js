import Head from 'next/head'

export const Layout = ({ version, children }) => {
  return (
    <div>
      <Head>
        <title>[{version}] Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href={`/css/bemoid.${version}.css`} />
      </Head>

      {children}
    </div>
  )
}

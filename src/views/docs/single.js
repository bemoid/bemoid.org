import Head from 'next/head'

export const DocsSingleView = ({ attributes }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <div className="flex__column">{attributes.title}</div>
        <div className="flex__column">{attributes.description}</div>
      </main>
    </div>
  )
}

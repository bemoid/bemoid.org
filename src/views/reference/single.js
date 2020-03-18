import Head from 'next/head'

export const ReferenceSingleView = ({ context }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <div className="flex__column">{context.type}</div>
        <div className="flex__column">{context.name}</div>
      </main>
    </div>
  )
}

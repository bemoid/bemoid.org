import Head from 'next/head'

export const StyleguideSingleView = ({ header, description }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <div className="flex__column">{header}</div>
        <div className="flex__column">{description}</div>
      </main>
    </div>
  )
}

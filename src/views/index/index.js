import { Head, Layout } from '@src/layouts'

export const IndexView = ({ context }) => (
  <Layout>
    <Head version={context.version} />

    <main className="index">
      <div className="index__wrapper flex">
        <div className="flex__column">Hello</div>
        <div className="flex__column">Docs!</div>
      </div>
    </main>
  </Layout>
)

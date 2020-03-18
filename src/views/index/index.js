import { Layout } from '@src/layouts/layout'

export const IndexView = ({ context }) => (
  <Layout version={context.version}>
    <main className="index">
      <div className="index__wrapper flex">
        <div className="flex__column">Hello</div>
        <div className="flex__column">Docs!</div>
      </div>
    </main>
  </Layout>
)

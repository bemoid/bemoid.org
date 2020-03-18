import { Layout } from '@src/layouts/layout'

export const ReferenceSingleView = ({ context, type, title }) => {
  return (
    <Layout version={context.version}>
      <main className="flex">
        <div className="flex__column">{type}</div>
        <div className="flex__column">{title}</div>
      </main>
    </Layout>
  )
}

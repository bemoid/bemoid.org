import { Layout } from '@src/layouts/layout'

export const StyleguideSingleView = ({ context, title, description }) => {
  return (
    <Layout version={context.version}>
      <main className="flex">
        <div className="flex__column">{title}</div>
        <div className="flex__column">{description}</div>
      </main>
    </Layout>
  )
}

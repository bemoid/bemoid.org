import { Head, Layout } from '@src/layouts'

export const ReferenceSingleView = ({ context, type, title }) => {
  return (
    <Layout>
      <Head title={`${title} API Reference`} version={context.version} />

      <main className="flex">
        <div className="flex__column">{type}</div>
        <div className="flex__column">{title}</div>
      </main>
    </Layout>
  )
}

import { Head, Layout } from '@src/layouts'

export const DocsSingleView = ({ context, title, description }) => {
  return (
    <Layout>
      <Head title={`${title} Documentation`} description={description} version={context.version} />

      <main className="flex">
        <div className="flex__column">
          <h2>{title}</h2>
        </div>
        <div className="flex__column">
          <p>{description}</p>
        </div>
      </main>
    </Layout>
  )
}

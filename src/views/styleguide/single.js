import { Head, Layout } from '@src/layouts'

export const StyleguideSingleView = ({ context, title, description }) => {
  return (
    <Layout>
      <Head title={`${title} Styleguide`} description={description} version={context.version} />

      <main className="flex">
        <div className="flex__column">{title}</div>
        <div className="flex__column">{description}</div>
      </main>
    </Layout>
  )
}

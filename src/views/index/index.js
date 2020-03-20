import { object } from 'prop-types'

import { Head, Layout } from '@src/layouts'

export const IndexView = ({ context }) => (
  <Layout>
    <Head version={context.version} />

    <main>
      <div>
        <h2>Hello Docs!</h2>
        <p>Lotem dorem ipsum alem</p>
      </div>
    </main>
  </Layout>
)

IndexView.propTypes = {
  context: object.isRequired,
}

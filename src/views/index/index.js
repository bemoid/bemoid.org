import style from './index.module.scss'

import { Head, Layout } from '@src/layouts'

export const IndexView = ({ context }) => (
  <Layout>
    <Head version={context.version} />

    <main className={style.index}>
      <div className={style.index__wrapper}>
        <h2>Hello Docs!</h2>
        <p>Lotem dorem ipsum alem</p>
      </div>
    </main>
  </Layout>
)

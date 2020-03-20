import { string, object } from 'prop-types'

import { Head, Layout } from '@src/layouts'
import { Header, Headline } from '@src/components'

export const DocsSingleView = ({ title, description, context }) => {
  return (
    <Layout>
      <Head
        title={`${title} Documentation`}
        description={description}
        currentVersion={context.currentVersion}
      />

      <Header currentVersion={context.currentVersion} variant={['withPadding']}>
        <Headline heading='Documentation'>
          A living styleguide and guidelines of all component the Bemoid CSS framework.
        </Headline>
      </Header>

      <main>
        <select>
          {context.versions.map((version, index) => (
            <option
              key={index}
              value={version}
              selected={version === context.currentVersion}
            >
              {version}
            </option>
          ))}
        </select>
      </main>
    </Layout>
  )
}

DocsSingleView.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  context: object.isRequired,
}

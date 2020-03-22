import { PageLayout } from '@src/layouts'
import { Headline, NavigationDocs } from '@src/components'

export const DocsIndexView = () => {
  return (
    <PageLayout
      title="Introduction — Documentation"
      description="Introduction"
      aside={<NavigationDocs />}
    >
      <Headline heading="Introduction">
        A component-oriented SASS framework based on BEM convention and OOCSS methodology
      </Headline>
    </PageLayout>
  )
}

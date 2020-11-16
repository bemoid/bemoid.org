import { PageLayout } from '@src/layouts'
import { Headline, Content, NavigationDocs } from '@src/components'

export const DocsIndexView = () => {
  return (
    <PageLayout
      title="Introduction — Documentation"
      description="Introduction"
      sidebar={<NavigationDocs />}
      headline={<Headline heading="Introduction" />}
    >
      <Content>
        Bemoid's follows ITCSS:
        <ul>
          <li>
            Generic – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates
            actual CSS.
          </li>
          <li>
            Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the
            browser so we can redefine them here.
          </li>
          <li>
            Objects – class-based selectors which define undecorated design patterns, for example media object known
            from OOCSS
          </li>
          <li>
            Components – specific UI components. This is where the majority of our work takes place and our UI
            components are often composed of Objects and Components
          </li>
        </ul>
      </Content>
    </PageLayout>
  )
}

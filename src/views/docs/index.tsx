import { FC } from 'react'

import { PageLayout } from '@/layouts'
import { Headline, Content, NavigationDocs } from '@/components'

export const DocsIndexView: FC = () => {
  return (
    <PageLayout
      title={`Introduction — Documentation`}
      description={`Introduction`}
      sidebar={<NavigationDocs />}
      headline={
        <Headline heading={`Introduction`}>
          Reset and/or normalize styles
        </Headline>
      }
    >
      <Content
        html={`
          Bemoid&apos;s follows ITCSS:
          <ul>
            <li>
              Generic – reset and/or normalize styles, box-sizing definition,
              etc. This is the first layer which generates actual CSS.
            </li>
            <li>
              Elements – styling for bare HTML elements (like H1, A, etc.).
              These come with default styling from the browser so we can
              redefine them here.
            </li>
            <li>
              Objects – class-based selectors which define undecorated design
              patterns, for example media object known from OOCSS
            </li>
            <li>
              Components – specific UI components. This is where the majority
              of our work takes place and our UI components are often composed
              of Objects and Components
            </li>
          </ul>
        `}
      />
    </PageLayout>
  )
}

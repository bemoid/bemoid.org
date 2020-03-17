import { Docs } from '../../src/pages/docs/docs'

import { getDocsPages, getDocsPage } from '../../api/docs/index'

export async function getStaticProps ({ params }) {
  const docs = await getDocsPage(params.slug)

  return {
    props: {
      ...docs
    }
  }
}

export async function getStaticPaths () {
  const docs = await getDocsPages()

  const paths = docs.map((item) => ({
    params: { slug: item.attributes.slug }
  }))

  return { paths, fallback: false }
}

export default Docs

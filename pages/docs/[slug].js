import { Docs } from '@pages/docs/docs'

import { getDocs, getAllDocs } from '@api'

export async function getStaticProps ({ params }) {
  const docs = await getDocs(params.slug)

  return {
    props: {
      ...docs
    }
  }
}

export async function getStaticPaths () {
  const docs = await getAllDocs()

  const paths = docs.map((item) => ({
    params: { slug: item.attributes.slug }
  }))

  return { paths, fallback: false }
}

export default Docs

import { ApiSingleView } from '@views/api/single'

import { getApi, getAllApi } from '@api/api'

export async function getStaticProps ({ params }) {
  const [type, slug] = params.slug

  const api = await getApi(type, slug)

  return {
    props: {
      ...api
    }
  }
}

export async function getStaticPaths () {
  const api = await getAllApi()

  const paths = api.map((item) => ({
    params: {
      slug: [item.context.type, item.context.name],
    }
  }))

  return { paths, fallback: false }
}

export default ApiSingleView

const slugify = require('slugify')
const algoliasearch = require('algoliasearch')

const { crawlerDocs } = require('../lib/crawler')

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY,
)

module.exports = () => {
  crawlerDocs(({ version, data }) => {
    const index = client.initIndex(`${process.env.ALGOLIA_INDEX_PREFIX}_${version}`)

    data.objectID = slugify(`docs_${version}_${data.attributes.title}`).toLowerCase()

    index
      .saveObject(data, { autoGenerateObjectIDIfNotExist: true })
      .catch((err) => {
        throw err
      })
  })
}

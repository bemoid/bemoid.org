const md = require('markdown-it')()
const slugify = require('slugify')

const { generate } = require('../lib/generate')
const { crawlerDocs } = require('../lib/crawler')

/**
 * Generates documentation data files from Bemoid's components `.md` files.
 *
 * @returns {void}
 */
module.exports = () => {
  crawlerDocs(({ version, data }) => {
    data.attributes = Object.assign(data.attributes, {
      slug: slugify(data.attributes.title).toLowerCase()
    })

    data.rawBody = data.body
    data.body = md.render(data.body)
    data.attributes.description = md.render(data.attributes.description)

    generate(`${version}/docs/${data.attributes.slug}.json`, data)
  })
}

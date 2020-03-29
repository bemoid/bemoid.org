const md = require('markdown-it')()
const slugify = require('slugify')

const { generate } = require('../lib/generate')
const { crawlerDocs, crawlerExamples } = require('../lib/crawler')

/**
 * Generates documentation data files from Bemoid's components `.md` files.
 *
 * @returns {void}
 */
module.exports = () => {
  crawlerDocs(({ version, data }) => {
    data.body = md.render(data.body)
    data.attributes = Object.assign(data.attributes, {
      slug: slugify(data.attributes.title).toLowerCase(),
      description: md.render(data.attributes.description),
    })

    crawlerExamples({ version, content: data.body }, (examples) => {
      data.attributes.shortcodes = data.attributes.shortcodes || {}
      data.attributes.shortcodes.examples = examples

      generate(`${version}/docs/${data.attributes.slug}.json`, data)
    })
  })
}

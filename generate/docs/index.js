const fm = require('front-matter')
const slugify = require('slugify')

const { paths } = require('../../app.config')
const { directories, files, process, generate } = require('../lib/generate')

/**
 * Generates documentation data files from Bemoid's components `.md` files.
 *
 * @returns {void}
 */
module.exports = () => {
  directories(paths.bemoid, (dirs) => {
    dirs.forEach((version) => {
      files(`${paths.bemoid}/${version}/**/!(LICENSE|README).md`, (files) => {
        process(files, (content) => {
          const data = fm(content)

          data.attributes = Object.assign(data.attributes, {
            slug: slugify(data.attributes.title).toLowerCase()
          })

          generate(`${version}/docs/${data.attributes.slug}.json`, data)
        })
      })
    })
  })
}

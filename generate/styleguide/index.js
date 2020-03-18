const kss = require('kss')
const slugify = require('slugify')

const { paths } = require('../../app.config')
const { generate } = require('../lib/generate')

/**
 * Generates styleguides data files from Bemoid's components `.scss` files.
 *
 * @returns {void}
 */
module.exports = () => {
  kss.traverse(paths.bemoid, { mask: '*.scss' }).then((styleguide) => {
    styleguide.data.sections.forEach((section) => {
      section.data = Object.assign(section.data, {
        slug: slugify(section.data.header).toLowerCase()
      })

      generate(`styleguide/${section.data.slug}.json`, section.data)
    })
  })
}

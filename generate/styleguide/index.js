const kss = require('kss')
const slugify = require('slugify')

const { paths } = require('../../app.config')
const { directories, generate } = require('../lib/generate')

/**
 * Generates styleguides data files from Bemoid's components `.scss` files.
 *
 * @returns {void}
 */
module.exports = () => {
  directories(paths.bemoid, (dirs) => {
    dirs.forEach((version) => {
      kss.traverse(`${paths.bemoid}/${version}`, { mask: '*.scss' }).then((styleguide) => {
        styleguide.data.sections.forEach((section) => {
          section.data = Object.assign(section.data, {
            slug: slugify(section.data.header).toLowerCase()
          })

          generate(`${version}/styleguide/${section.data.slug}.json`, section.data)
        })
      })
    })
  })
}

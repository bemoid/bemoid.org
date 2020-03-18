const sassdoc = require('sassdoc')
const slugify = require('slugify')

const { paths } = require('../../app.config')
const { directories, generate } = require('../lib/generate')

/**
 * Generates API reference data files from Bemoid's component `.scss` files.
 *
 * @returns {void}
 */
module.exports = () => {
  directories(paths.bemoid, (dirs) => {
    dirs.forEach((version) => {
      sassdoc.parse(`${paths.bemoid}/${version}`, { verbose: true }).then((references) => {
        references.forEach((data) => {
          const filename = slugify(`${data.context.type}-${data.context.name}`
          )
          generate(`${version}/reference/${filename}.json`, data)
        })
      })
    })
  })
}

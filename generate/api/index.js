const sassdoc = require('sassdoc')
const slugify = require('slugify')

const { paths } = require('../../app.config')
const { generate } = require('../lib/generate')

/**
 * Generates api data files from Bemoid's components `.scss` files.
 *
 * @returns {void}
 */
module.exports = () => {
  sassdoc.parse(paths.bemoid, { verbose: true }).then((apis) => {
    apis.forEach((data) => {
      const filename = slugify(`${data.context.type}-${data.context.name}`
      )
      generate(`api/${filename}.json`, data)
    })
  })
}

const fse = require('fs-extra')
const sass = require('node-sass')

const { paths } = require('../../app.config')
const { directories } = require('../lib/generate')

module.exports = () => {
  directories(paths.bemoid, (dirs) => {
    dirs.forEach((version) => {
      sass.render({
        outputStyle: 'compressed',
        file: `${paths.assets}/sass/bemoid/bemoid.${version}.scss`
      }, (err, result) => {
        if (err) throw err
        fse.outputFile(`${paths.public}/css/bemoid.${version}.css`, result.css, function (err) {
          if (err) throw err
        })
      })
    })
  })
}

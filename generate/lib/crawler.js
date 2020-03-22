const fm = require('front-matter')
const { paths } = require('../../app.config')
const { directories, files, process } = require('./generate')

exports.crawlerDocs = (act) => {
  directories(paths.bemoid, (dirs) => {
    dirs.forEach((version) => {
      files(`${paths.bemoid}/${version}/**/!(LICENSE|README).md`, (files) => {
        process(files, (content) => {
          const data = fm(content)

          act({ version, data })
        })
      })
    })
  })
}

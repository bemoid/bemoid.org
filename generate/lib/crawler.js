const fs = require('fs')
const path = require('path')
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

exports.crawlerShortcodes = (shortcode, { version, content }) => {
  let matches = []
  let shortcodes = {}

  do {
    matches = shortcode.exec(content)

    if (matches) {
      const placeholder = matches[0]
      const filepath = path.resolve(paths.bemoid, version, matches.groups.path)
      const html = fs.readFileSync(filepath).toString()

      Object.assign(shortcodes, {
        [placeholder]: html
      })
    }
  } while (matches)

  return shortcodes
}

exports.crawlerExamples = ({ version, content }, callback) => {
  const shortcode = /\[\[example file=(?<path>.+)\]\]/g

  callback(exports.crawlerShortcodes(shortcode, { version, content }))
}

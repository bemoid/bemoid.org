const fs = require('fs')
const glob = require('glob')
const fse = require('fs-extra')
const fm = require('front-matter')
const slugify = require('slugify')

const { paths } = require('../../app.config')

glob(`${paths.bemoid}/**/!(LICENSE|README).md`, (err, files) => {
  if (err) throw err

  files.forEach((file) => {
    fs.readFile(file, { encoding: 'utf-8' }, function (err, content) {
      if (err) throw err

      const data = fm(content)

      data.attributes = Object.assign(data.attributes, {
        slug: slugify(data.attributes.title).toLowerCase()
      })

      fse.outputJson(`${paths.json}/docs/${data.attributes.slug}.json`, data, (err) => {
        if (err) throw err
      })
    })
  })
})

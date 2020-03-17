const fs = require('fs')
const glob = require('glob')
const fse = require('fs-extra')

const { paths } = require('../../app.config')

exports.files = (path, callback) => {
  glob(path, (err, files) => {
    if (err) throw err

    callback(files)
  })
}

exports.process = (files, callback) => {
  files.forEach((file) => {
    fs.readFile(file, { encoding: 'utf-8' }, function (err, content) {
      if (err) throw err

      callback(content)
    })
  })
}

exports.generate = (path, data) => {
  fse.outputJson(`${paths.data}/${path}`, data, (err) => {
    if (err) throw err
  })
}

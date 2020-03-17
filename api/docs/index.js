const fg = require('fast-glob')
const fse = require('fs-extra')

const { paths } = require('../../app.config')

exports.getDocsPages = async () => {
  try {
    const files = await fg(`${paths.json}/docs/*.json`)

    return files.map((file) => {
      const json = fse.readJsonSync(file)

      return json
    })
  } catch (error) {
    throw error
  }
}

exports.getDocsPage = async (slug) => {
  try {
    const json = await fse.readJson(`${paths.json}/docs/${slug}.json`)

    return json
  } catch (error) {
    throw error
  }
}

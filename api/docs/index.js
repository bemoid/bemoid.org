const fg = require('fast-glob')
const fse = require('fs-extra')

const { paths } = require('../../app.config')

exports.getAllDocs = async () => {
  try {
    const files = await fg(`${paths.data}/docs/*.json`)

    return files.map((file) => {
      const content = fse.readJsonSync(file)

      return content
    })
  } catch (error) {
    throw error
  }
}

exports.getDocs = async (slug) => {
  try {
    const data = await fse.readJson(`${paths.data}/docs/${slug}.json`)

    return data
  } catch (error) {
    throw error
  }
}

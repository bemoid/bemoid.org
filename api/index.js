const { getVersions, getLatestVersion } = require('./versions')
const { getDocs, getAllDocs } = require('./docs')
const { getStyleguide, getAllStyleguides } = require('./styleguide')
const {
  getReference,
  getAllReference,
  getAllVariablesReference,
  getAllMixinsReference,
  getAllFunctionsReference
} = require('./reference')

module.exports = {
  getVersions,
  getLatestVersion,
  getDocs,
  getAllDocs,
  getStyleguide,
  getAllStyleguides,
  getReference,
  getAllReference,
  getAllVariablesReference,
  getAllMixinsReference,
  getAllFunctionsReference,
}

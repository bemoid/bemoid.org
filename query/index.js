const { getVersions, getLatestVersion } = require('./versions')
const { getDocs, getAllDocs, getAllDocsByGroup } = require('./docs')
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
  getAllDocsByGroup,
  getStyleguide,
  getAllStyleguides,
  getReference,
  getAllReference,
  getAllVariablesReference,
  getAllMixinsReference,
  getAllFunctionsReference,
}

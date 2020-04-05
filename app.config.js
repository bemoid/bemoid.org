const path = require('path')

module.exports = {
  paths: {
    public: path.resolve(__dirname, 'public'),
    data: path.resolve(__dirname, 'resources/data'),
    sass: path.resolve(__dirname, 'resources/sass'),
    bemoid: path.resolve(__dirname, 'node_modules/@bemoid/bemoid')
  }
}

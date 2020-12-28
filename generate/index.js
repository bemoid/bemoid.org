// This file has one simple responsibility.
// Collects all generators and run
// them to generate data files.
const generators = [
  require('./css'),
  require('./docs'),
  require('./search'),
  require('./reference'),
  require('./styleguide'),
]

generators.forEach((generator) => {
  generator()
})

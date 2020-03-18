// This file has one simple responsibility.
// Collects all generators and run
// them to generate data files.
[
  require('./css'),
  require('./docs'),
  require('./reference'),
  require('./styleguide')
].forEach((generator) => {
  generator()
})

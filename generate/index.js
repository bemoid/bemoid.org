// This file has one simple responsibility
// Collects all generators and run
// them to generate data files
[
  require('./docs'),
  require('./reference'),
  require('./styleguide')
].forEach((generator) => {
  try {
    generator()
  } catch (error) {
    throw error
  }
})

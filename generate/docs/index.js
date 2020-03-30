const md = require('markdown-it')()
const slugify = require('slugify')
const mdToc = require('markdown-it-toc-and-anchor').default

md.use(mdToc)

const { generate } = require('../lib/generate')
const { crawlerDocs, crawlerExamples } = require('../lib/crawler')

const buildTree = (toc) => {
  // [h1, children]
  const tree = [undefined, []]

  // references to latest
  // [h1, h2, h3, h4, h5] (h6 excluded because cannot have children)
  let references = [null, tree] // usable indexes are 1,2,3,4,5

  for (const heading of toc) {
    const h = Math.min(6, heading.level) // h1-h6

    // h1
    if (h === 1) {
      tree[0] = heading
      continue
    }

    // create prior reference for references[h] if they don't exist
    // EXAMPLE: inserting h4 but prior h2 and h3 don't exist
    if (!references[h - 1]) {
      for (let i = 2; i < h; i++) { // start from h2
        // h2 doesn't exist, create it from the parent h1
        if (!references[i]) {
          let parentChildren = references[i - 1][1]
          let newReference = [undefined, []]

          parentChildren.push(newReference)
          references[i] = newReference
        }
      }
    }

    // insert newItem
    let newItem = [heading, []]
    references[h - 1][1].push(newItem) // 1. insert newItem
    references[h] = newItem // 2. newItem becomes references[h]
    references.splice(h + 1) // 3. remove deeper references
  }

  // Return the tree
  return tree
}

/**
 * Generates documentation data files from Bemoid's components `.md` files.
 *
 * @returns {void}
 */
module.exports = () => {
  crawlerDocs(({ version, data }) => {
    data.body = md.render(data.body, {
      tocCallback: function (tocMarkdown, tocArray, tocHtml) {
        data.attributes.headings = buildTree(tocArray)
      }
    })
    data.attributes = Object.assign(data.attributes, {
      slug: slugify(data.attributes.title).toLowerCase(),
      description: md.render(data.attributes.description),
    })

    crawlerExamples({ version, content: data.body }, (examples) => {
      data.attributes.shortcodes = data.attributes.shortcodes || {}
      data.attributes.shortcodes.examples = examples

      generate(`${version}/docs/${data.attributes.slug}.json`, data)
    })
  })
}

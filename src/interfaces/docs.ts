export interface DocsHeadingsInterface {
  content: string
  anchor: string
  level: number
}

export interface DocsShortcodeInterface {
  [key: string]: string
}

export interface DocsShortcodesInterface {
  examples?: DocsShortcodeInterface
}

export interface DocsAttributesInterface {
  title: string
  description: string
  group: string
  slug: string
  headings: DocsHeadingsInterface[]
  shortcodes: DocsShortcodesInterface
}

export interface DocsInterface {
  attributes: DocsAttributesInterface
  body: string
  bodyBegin: number
  frontmatter: string
}

export interface DocsGroupInterface {
  name: string
  items: DocsInterface[]
}

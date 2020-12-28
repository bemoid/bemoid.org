import { FC } from 'react'
import { renderToString } from 'react-dom/server'

import { Example } from 'src/components'

import * as Styled from './content.styled'

type ContentProps = {
  html: string
  shortcodes?: {
    examples: object
  }
}

const renderShortcodes = (content, shortcodes, componentProvider) => {
  for (const shortcode in shortcodes) {
    const component = componentProvider(shortcodes[shortcode])
    const markup = renderToString(component)

    content = content.replace(shortcode, markup)
  }

  return content
}

export const Content: FC<ContentProps> = ({ html, shortcodes }) => {
  if (shortcodes) {
    html = renderShortcodes(html, shortcodes.examples, (markup) => (
      <Example html={markup} />
    ))
  }

  return <Styled.Content dangerouslySetInnerHTML={{ __html: html }} />
}

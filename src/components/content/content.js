import { string, object } from 'prop-types'
import { renderToString } from 'react-dom/server'

import { Example } from '@src/components'

import * as Styled from './content.styled'

const renderShortcodes = (content, shortcodes, componentProvider) => {
  for (let shortcode in shortcodes) {
    const component = componentProvider(shortcodes[shortcode])
    const markup = renderToString(component)

    content = content.replace(shortcode, markup)
  }

  return content
}

export const Content = ({ content, shortcodes }) => {
  content = renderShortcodes(content, shortcodes.examples, (html) => (
    <Example html={html} />
  ))

  return (
    <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />
  )
}

Content.propTypes = {
  content: string.isRequired,
  shortcodes: object,
}

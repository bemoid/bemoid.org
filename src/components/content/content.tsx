import { forwardRef } from 'react'
import { renderToString } from 'react-dom/server'

import { Example } from '@/components'

import type { ReactElement } from 'react'
import type {
  DocsShortcodeInterface,
  DocsShortcodesInterface,
} from '@/interfaces/docs'

import * as Styled from './content.styled'

export type ContentProps = {
  html: string
  shortcodes?: DocsShortcodesInterface
}

const renderShortcodes = (
  content: string,
  shortcodes: DocsShortcodeInterface,
  componentProvider: (markup: string) => ReactElement
): string => {
  for (const shortcode in shortcodes) {
    const component = componentProvider(shortcodes[shortcode])
    const markup = renderToString(component)

    content = content.replace(shortcode, markup)
  }

  return content
}

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ html, shortcodes, ...rest }, ref) => {
    if (shortcodes && shortcodes.examples) {
      html = renderShortcodes(html, shortcodes.examples, (markup) => (
        <Example html={markup} />
      ))
    }

    return (
      <Styled.Content
        dangerouslySetInnerHTML={{ __html: html }}
        ref={ref}
        {...rest}
      />
    )
  }
)

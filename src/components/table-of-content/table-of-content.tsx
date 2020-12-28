import { FC } from 'react'

import { DocsHeadingsInterface } from 'interfaces/docs'

import * as Styled from './table-of-content.styled'

type TableOfContentProps = {
  list: Array<DocsHeadingsInterface>
}

export const TableOfContent: FC<TableOfContentProps> = ({ list }) => {
  const render = (list, index = 0) => (
    <>
      {list[0] ? (
        <Styled.Item key={index}>
          <Styled.Link href={`#${list[0].anchor}`}>
            {list[0].content}
          </Styled.Link>
        </Styled.Item>
      ) : (
        <Styled.Item>
          <Styled.Heading>On this page</Styled.Heading>
        </Styled.Item>
      )}

      {list[1].map((item, index) => (
        <Styled.Item key={index}>
          <Styled.Link href={`#${item[0].anchor}`}>
            {item[0].content}
          </Styled.Link>

          {item[1].length > 0 && (
            <Styled.SubList>
              {item[1].map((list, index) => render(list, index))}
            </Styled.SubList>
          )}
        </Styled.Item>
      ))}
    </>
  )

  return <Styled.List>{render(list)}</Styled.List>
}

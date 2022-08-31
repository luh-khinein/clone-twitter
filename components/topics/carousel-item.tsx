import React, { useEffect } from 'react'
import TopicListColumn from './topic-list'

interface CarouselValue {
  names: Array<string>
  rows: number
}

const CarouselTopicItem: React.FC<CarouselValue> = ({ names, rows }) => {
  const columns = []
  let i = 0
  for (i; i < names.length; i += rows) {
    columns.push(
      <TopicListColumn
        names={names.slice(i, (i + rows))}
        hasX={false}
      />
    )
  }

  useEffect(() => {
    if (i - names.length >= 1 && i - names.length < rows) {
      columns.push(
        <TopicListColumn
          names={names.slice((i - rows + 1), names.length - 1)}
          hasX={false}
        />
      )
    }
  }, [])

  return (
    <div className='flex'>
      {columns}
    </div>
  )
}

const CarouselTopicItemWithX: React.FC<CarouselValue> = ({ names, rows }) => {
  const columns = []
  let i = 0
  for (i; i < names.length; i += rows) {
    columns.push(
      <TopicListColumn
        names={names.slice(i, (i + rows))}
        hasX={true}
      />
    )
  }

  useEffect(() => {
    if (i - names.length >= 1 && i - names.length < rows) {
      columns.push(
        <TopicListColumn
          names={names.slice((i - rows + 1), names.length - 1)}
          hasX={true}
        />
      )
    }
  }, [])

  return (
    <div className='flex'>
      {columns}
    </div>
  )
}

interface Props {
  topics: Array<string>
  maxRows: number
  maxColumns: number
  hasX: boolean
}

const CarouselTopicAllItems: React.FC<Props> = ({ topics, maxRows, maxColumns, hasX }) => {
  const items: Array<React.ReactElement> = []
  let i = 0
  for (i; i < topics.length; i += maxRows * maxColumns) {
    if (hasX) {
      items.push(
        <CarouselTopicItemWithX
          names={topics.slice(i, (i + maxRows * maxColumns))}
          rows={maxRows}
        />
      )
    } else {
      items.push(
        <CarouselTopicItem
          names={topics.slice(i, (i + maxRows * maxColumns))}
          rows={maxRows}
        />
      )
    }
  }

  useEffect(() => {
    if (i - topics.length >= 1 && i - topics.length < (maxRows * maxColumns)) {
      if (hasX) {
        items.push(
          <CarouselTopicItemWithX
            names={topics.slice(i + 1 - (maxRows * maxColumns), topics.length - 1)}
            rows={maxRows}
          />
        )
      } else {
        items.push(
          <CarouselTopicItem
            names={topics.slice(i + 1 - (maxRows * maxColumns), topics.length - 1)}
            rows={maxRows}
          />
        )
      }
    }
  }, [])

  return <>{items}</>

}

export default CarouselTopicAllItems

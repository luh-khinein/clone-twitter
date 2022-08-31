import React from 'react'
import TopicListColumn from './topic-list'

interface CarouselValue {
  names: Array<string>
  rows: number
}

export const CarouselTopicItem: React.FC<CarouselValue> = ({ names, rows }) => {
  const columns = []
  for (let i = rows; i <= names.length; i += rows) {
    if (i < names.length) {
      const initialRow = i - rows
      columns.push(
        <TopicListColumn
          names={names.slice(initialRow, i)}
          hasX={false}
        />
      )
    } else {
      const initialRow = rows - i
      i = names.length - 1
      columns.push(
        <TopicListColumn
          names={names.slice(initialRow, i)}
          hasX={false}
        />
      )
    }
  }
  return (
    <div className='flex w-max'>
      {columns}
    </div>
  )
}

export const CarouselTopicItemWithX: React.FC<CarouselValue> = ({ names, rows }) => {
  const columns = []
  for (let i = rows; i <= names.length; i += rows) {
    if (i < names.length) {
      const initialRow = i - rows
      columns.push(
        <TopicListColumn
          names={names.slice(initialRow, i)}
          hasX={true}
        />
      )
    } else {
      const initialRow = rows - i
      i = names.length - 1
      columns.push(
        <TopicListColumn
          names={names.slice(initialRow, i)}
          hasX={true}
        />
      )
    }
  }
  return (
    <div className='flex w-max'>
      {columns}
    </div>
  )
}

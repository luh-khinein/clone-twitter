import React, { useEffect } from 'react'
import TopicListColumn from './topic-list'

interface CarouselValue {
  topic: string
  items: Array<string>
  rows: number
  currentStateKey: number
}

const CarouselTopicItem: React.FC<CarouselValue> = ({ topic, items, rows, currentStateKey }) => {
  let columns: Array<React.ReactNode> = []
  let i = 0
  let keyValue = 1 + currentStateKey
  for (i; i < items.length; i += rows) {
    columns.push(
      <TopicListColumn
        topic={topic}
        names={items.slice(i, (i + rows))}
        hasX={false}
        keyValue={`${topic} - ${keyValue}º column`}
      />
    )
    ++keyValue
  }

  useEffect(() => {
    if (i - items.length >= 1 && i - items.length < rows) {
      columns.push(
        <TopicListColumn
          topic={topic}
          names={items.slice((i - rows + 1), items.length - 1)}
          hasX={false}
          keyValue={`${topic} - ${keyValue}º column`}
        />
      )
    }
  }, [i, items, rows, columns, keyValue, topic])

  return (
    <div className='flex'>
      {columns}
    </div>
  )
}

const CarouselTopicItemWithX: React.FC<CarouselValue> = ({ topic, items, rows, currentStateKey }) => {
  const columns = []
  let i = 0
  let keyValue = 1 + currentStateKey
  for (i; i < items.length; i += rows) {
    columns.push(
      <TopicListColumn
        topic={topic}
        names={items.slice(i, (i + rows))}
        hasX={true}
        keyValue={`${topic} - ${keyValue}º column`}
      />
    )
    ++keyValue
  }

  useEffect(() => {
    if (i - items.length >= 1 && i - items.length < rows) {
      columns.push(
        <TopicListColumn
          topic={topic}
          names={items.slice((i - rows + 1), items.length - 1)}
          hasX={true}
          keyValue={`${topic} - ${keyValue}º column`}
        />
      )
    }
  }, [i, items, rows, columns, keyValue, topic])

  return (
    <div className='flex'>
      {columns}
    </div>
  )
}

interface Props {
  topic: string
  items: Array<string>
  maxRows: number
  maxColumns: number
  hasX: boolean
}

const CarouselTopicAllItems: React.FC<Props> = ({ topic, items, maxRows, maxColumns, hasX }) => {
  const carouselBody: Array<React.ReactNode> = []
  let i = 0
  let keyValue = 0
  for (i; i < items.length; i += maxRows * maxColumns) {
    if (hasX) {
      carouselBody.push(
        <CarouselTopicItemWithX
          topic={topic}
          items={items.slice(i, (i + maxRows * maxColumns))}
          rows={maxRows}
          currentStateKey={keyValue}
        />
      )
    } else {
      carouselBody.push(
        <CarouselTopicItem
          topic={topic}
          items={items.slice(i, (i + maxRows * maxColumns))}
          rows={maxRows}
          currentStateKey={keyValue}
        />
      )
    }
    keyValue += maxColumns
  }

  useEffect(() => {
    if (i - items.length >= 1 && i - items.length < (maxRows * maxColumns)) {
      if (hasX) {
        carouselBody.push(
          <CarouselTopicItemWithX
            topic={topic}
            items={items.slice(i + 1 - (maxRows * maxColumns), items.length - 1)}
            rows={maxRows}
            currentStateKey={keyValue}
          />
        )
      } else {
        carouselBody.push(
          <CarouselTopicItem
            topic={topic}
            items={items.slice(i + 1 - (maxRows * maxColumns), items.length - 1)}
            rows={maxRows}
            currentStateKey={keyValue}
          />
        )
      }
    }
  }, [carouselBody, hasX, i, items, keyValue, maxRows, maxColumns, topic,])

  return <>{carouselBody}</>

}

export default CarouselTopicAllItems

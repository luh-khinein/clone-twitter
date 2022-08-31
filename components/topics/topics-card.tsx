import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import CarouselTopics from './carousel'
import { CarouselTopicItem } from './carousel-item'

interface TopicsCardValue {
  name: string
  topics: Array<string>
  hasMore: boolean
}

const TopicsCard: React.FC<TopicsCardValue> = ({ name, topics, hasMore }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const items = []
  for (let i = 9; i <= topics.length; i += 9) {
    const initialItems = i - 9
    items.push(
      <CarouselTopicItem
        names={topics.slice(initialItems, i)}
        rows={3}
      />
    )
  }

  return (
    <div className={`flex flex-col w-full py-2 border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
      <h2 className='text-2xl font-bold'>
        {name}
      </h2>
      <CarouselTopics>
        {items}
      </CarouselTopics>
      {hasMore && (
        <Link href='/home'>
          <a className={`w-full px-4 py-3 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`} style={{
            color: colorTheme,
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            View all
          </a>
        </Link>
      )}
    </div>
  )
}

export default TopicsCard

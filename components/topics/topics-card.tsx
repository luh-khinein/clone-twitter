import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import CarouselTopics from './carousel'
import CarouselTopicAllItems from './carousel-item'

interface TopicsCardValue {
  name: string
  topics: Array<string>
  maxRows: number
  hasMore: boolean
}

const TopicsCard: React.FC<TopicsCardValue> = ({ name, topics, maxRows, hasMore }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`flex flex-col w-full py-1 border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
      <h2 className='text-xl font-bold px-4 py-3'>
        {name}
      </h2>
      <CarouselTopics>
        <CarouselTopicAllItems
          topics={topics}
          maxRows={maxRows}
          maxColumns={4}
          hasX={false}
        />
      </CarouselTopics>
      {hasMore && (
        <Link href='/home'>
          <a className={`w-full px-4 py-4 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`} style={{
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

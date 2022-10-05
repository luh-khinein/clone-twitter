import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import Carousel from './carousel'
import CarouselTopicAllItems from './carousel-item'
import { FontSizeContext } from '../../utils/font-size'

interface TopicsCardValue {
  name: string
  items: Array<string>
  maxRows: number
  hasMore: boolean
  link?: string
}

const TopicsCard: React.FC<TopicsCardValue> = ({ name, items, maxRows, hasMore, link }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className={`flex flex-col w-full py-1 border-t ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h2 className='font-bold px-4 py-3' style={{
        fontSize: `${xlSize}px`
      }}>
        {name}
      </h2>
      <Carousel>
        <CarouselTopicAllItems
          topic={name}
          items={items}
          maxRows={maxRows}
          maxColumns={4}
          hasX={false}
        />
      </Carousel>
      {hasMore && (
        <Link href={link!}>
          <a className={`w-full px-4 py-4 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
            color: colorTheme,
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '',
            fontSize: `${baseSize}px`
          }}>
            View all
          </a>
        </Link>
      )}
    </div>
  )
}

export default TopicsCard

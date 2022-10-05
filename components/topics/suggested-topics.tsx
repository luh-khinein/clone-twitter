import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import CarouselTopics from './carousel'
import CarouselTopicAllItems from './carousel-item'
import { FontSizeContext } from '../../utils/font-size'

const SuggestedTopics: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  let items: Array<string> = []
  for (let i = 1; i <= 100; ++i) {
    items.push(`${i}º item`)
  }

  return (
    <div className={`flex flex-col w-full border-t ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <div className='flex flex-col items-start px-5 py-2'>
        <h2 className='font-bold' style={{
          fontSize: `${xlSize}px`
        }}>
          Suggested Topics
        </h2>
        <span style={{ fontSize: `${smSize}px` }}>
          You&apos;ll see top Tweets about these right in your Home timeline
        </span>
      </div>
      <CarouselTopics>
        <CarouselTopicAllItems
          topic='Suggested'
          items={items}
          maxRows={5}
          maxColumns={3}
          hasX={true}
        />
      </CarouselTopics>
      <Link href='/i/topics/picker/home'>
        <a className={`w-full px-5 py-4 flex items-start ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          fontSize: `${baseSize}px`,
          color: colorTheme,
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          More Topics
        </a>
      </Link>
    </div>
  )
}

export default SuggestedTopics

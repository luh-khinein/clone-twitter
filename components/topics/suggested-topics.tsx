import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import CarouselTopics from './carousel'
import CarouselTopicAllItems from './carousel-item'

const SuggestedTopics: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  let names: Array<string> = []
  for (let i = 1; i <= 100; ++i) {
    names.push(`${i}º item`)
  }

  return (
    <div className={`flex flex-col w-full border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
      <div className='flex flex-col items-start px-5 py-2'>
        <h2 className='text-xl font-bold'>
          Suggested Topics
        </h2>
        <span className='text-sm'>
          You'll see top Tweets about these right in your Home timeline
        </span>
      </div>
      <CarouselTopics>
        <CarouselTopicAllItems
          topics={names}
          maxRows={5}
          maxColumns={3}
          hasX={true}
        />
      </CarouselTopics>
      <Link href='/home'>
        <a className={`w-full px-5 py-4 flex items-start ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
          color: colorTheme,
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}>
          More Topics
        </a>
      </Link>
      <div className={`inline-block items-center w-full px-5 py-4 text-sm border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
        Topics that you follow are shown here. To see all the things that Twitter thinks you're
        interested in, check out &nbsp;
        <a href='/home' style={{ color: colorTheme }}>
          Your Twitter data.&nbsp;
        </a>
        You can also <a href='/home' style={{ color: colorTheme }}>learn more</a> about following Topics.
      </div>
    </div>
  )
}

export default SuggestedTopics

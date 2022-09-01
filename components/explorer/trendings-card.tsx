import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { HashTrending, NoticesTrending, Trending } from '../sidebar/trending-sidebar'

const TrendingsCard: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='min-h-min w-full flex flex-col mt-1' style={{
      backgroundColor: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <NoticesTrending
        topic='Outdoors'
        time='2 hours ago'
        title='A woodpecker was seen pecking'
        image='/trending/woodpecker-trending.jpg'
        link=''
        className={`${backgroundTheme === 'light' ? 'bg-white' : backgroundTheme === 'dark' ? `bg-[${darkTheme.background}]` : 'bg-black'}`}
      />
      <HashTrending
        title="#IDon'tKnow"
        content="I really don't know what to put here O_o"
        link=''
        className={`${backgroundTheme === 'light' ? 'bg-white' : backgroundTheme === 'dark' ? `bg-[${darkTheme.background}]` : 'bg-black'}`}
      />
      <Trending
        topic='News'
        title='Ducks have envolved a lot, being considered dangerous to several countries'
        image='/trending/duck-trending.jpg'
        link=''
        className={`${backgroundTheme === 'light' ? 'bg-white' : backgroundTheme === 'dark' ? `bg-[${darkTheme.background}]` : 'bg-black'}`}
      />
      <Trending
        topic='Technology'
        title='Dogs are crashing the economy by running online shopping bots'
        image='/trending/dog-trending.jpg'
        link=''
        className={`${backgroundTheme === 'light' ? 'bg-white' : backgroundTheme === 'dark' ? `bg-[${darkTheme.background}]` : 'bg-black'}`}
      />
    </div>
  )
}

export default TrendingsCard

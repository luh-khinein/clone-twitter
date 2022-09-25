import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { HashTrending, NoticesTrending, Trending } from '../explorer/cards'

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
        link='/i/events/2'
      />
      <HashTrending
        title="#IDon'tKnow"
        content="I really don't know what to put here O_o"
        link='/search?q=%23IDon%27tKnow'
      />
      <Trending
        topic='News'
        title='Ducks have envolved a lot, being considered dangerous to several countries'
        image='/trending/duck-trending.jpg'
        link='/i/events/3'
      />
      <Trending
        topic='Technology'
        title='Dogs'
        link='/search?q=Dogs'
      />
    </div>
  )
}

export default TrendingsCard

import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { HashTrending, NoticesTrending, Trending } from './trending-sidebar'
import WhoToFollow from './peoples-to-follow-sidebar'

// What'happening card
export const HCard: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full min-h-min rounded-xl ${backgroundTheme === 'light' ? 'bg-neutral-50' : 'brightness-125'} flex flex-col mt-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : backgroundTheme === 'black'
          ? '#000'
          : ''
    }}>
      <h1 className='text-xl py-3 px-4 font-bold'>
        What's happening?
      </h1>
      <div>
        <NoticesTrending
          topic='Outdoors'
          time='2 hours ago'
          title='A woodpecker was seen pecking'
          image='/trending/woodpecker-trending.jpg'
          link=''
          className={`${backgroundTheme === 'light' ? 'bg-neutral-50' : ''}`}
        />
        <HashTrending
          title="#IDon'tKnow"
          content="I really don't know what to put here O_o"
          link=''
          className={`${backgroundTheme === 'light' ? 'bg-neutral-50' : ''}`}
        />
        <Trending
          topic='News'
          title='Ducks have evolved a lot, being considered dangerous to several countries'
          image='/trending/duck-trending.jpg'
          link=''
          className={`${backgroundTheme === 'light' ? 'bg-neutral-50' : ''}`}
        />
        <Trending
          topic='Technology'
          title='Dogs are crashing the economy by running online shopping bots'
          image='/trending/dog-trending.jpg'
          link=''
          className={`${backgroundTheme === 'light' ? 'bg-neutral-50' : ''}`}
        />
        <NoticesTrending
          topic='Politics'
          time='LIVE'
          title='Our beloved new president made his address at a party'
          image='/trending/monkey-trending.jpg'
          link=''
          className={`${backgroundTheme === 'light' ? 'bg-neutral-50' : ''}`}
        />
      </div>
      <Link href=''>
        <a className={`text-sm py-3 px-4 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-neutral-50 hover:brightness-95' : 'hover:brightness-110'} duration-200`}
          style={{
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : backgroundTheme === 'black'
                ? '#000'
                : ''
          }}
        >
          Show more
        </a>
      </Link>
    </div>
  )
}

// Who to follow card
export const FCard: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full min-h-min rounded-xl flex flex-col ${backgroundTheme === 'light' ? 'bg-neutral-50' : 'brightness-125'} my-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : backgroundTheme === 'black'
          ? '#000'
          : ''
    }}>
      <h1 className='text-xl tracking-widest p-3 font-bold'>
        Who to follow
      </h1>
      <div>
        <WhoToFollow
          image='/icons/woodpecker-icon.jpg'
          nickname='Woodpecker'
          username='@TheIncredibleWoodpecker'
          link=''
        />
        <WhoToFollow
          image='/icons/duck-icon.jpg'
          nickname='Tonny Delb'
          username='@Delb'
          link=''
        />
        <WhoToFollow
          image='/icons/monkey-icon.jpg'
          nickname='President'
          username='@TheMonkey'
          link=''
        />
      </div>
      <Link href=''>
        <a className={`text-sm p-3 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-gray-50 hover:brightness-95' : 'hover:brightness-110'} duration-200`}
          style={{
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : backgroundTheme === 'black'
                ? '#000'
                : ''
          }}
        >
          Show more
        </a>
      </Link>
    </div>
  )
}

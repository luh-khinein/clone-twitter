import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { HashTrending, NoticesTrending, Trending } from './trending-sidebar'
import WhoToFollow from './peoples-to-follow-sidebar'
import { FontSizeContext } from '../../utils/font-size'

// What'happening card
export const HCard: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className={`w-full min-h-min rounded-xl ${backgroundTheme === 'light' ? 'bg-gray-50' : backgroundTheme === 'black' ? 'bg-zinc-900' : 'brightness-110'} flex flex-col mt-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : ''
    }}>
      <h1 className='py-3 px-4 font-bold' style={{
        fontSize: `${xlSize}px`
      }}>
        What's happening?
      </h1>
      <div>
        <NoticesTrending
          topic='Outdoors'
          time='2 hours ago'
          title='A woodpecker was seen pecking'
          image='/trending/woodpecker-trending.jpg'
          link=''
        />
        <HashTrending
          title="#IDon'tKnow"
          content="I really don't know what to put here O_o"
          link=''
        />
        <Trending
          topic='News'
          title='Ducks have evolved a lot, being considered dangerous to several countries'
          image='/trending/duck-trending.jpg'
          link=''
        />
        <Trending
          topic='Technology'
          title='Dogs are crashing the economy by running online shopping bots'
          image='/trending/dog-trending.jpg'
          link=''
        />
        <NoticesTrending
          topic='Politics'
          time='LIVE'
          title='Our beloved new president made his address at a party'
          image='/trending/monkey-trending.jpg'
          link=''
        />
      </div>
      <Link href=''>
        <a className={`py-3 px-4 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-gray-50 hover:brightness-95' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`}
          style={{
            fontSize: `${smSize}px`,
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
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
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className={`w-full min-h-min rounded-xl flex flex-col ${backgroundTheme === 'light' ? 'bg-gray-50' : backgroundTheme ? 'bg-zinc-900' : 'brightness-125'} my-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : ''
    }}>
      <h1 className='tracking-widest p-3 font-bold' style={{
        fontSize: `${xlSize}px`
      }}>
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
        <a className={`p-3 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-gray-50 hover:brightness-95' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`}
          style={{
            fontSize: `${smSize}px`,
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}
        >
          Show more
        </a>
      </Link>
    </div>
  )
}

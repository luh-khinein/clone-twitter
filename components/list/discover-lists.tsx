import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import ListCard from './list-card'
import { FontSizeContext } from '../../utils/font-size'

const DiscoverLists = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className={`w-full flex flex-col border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h2 className='font-bold tracking-wide px-4 py-3' style={{
        fontSize: `${xlSize}px`
      }}>
        Discover new Lists
      </h2>
      <ListCard
        link='/i/lists/1'
        image={`/assets/list-card-${1}.jpg`}
        name='RPG'
        creatorImage='/icons/woodpecker-icon.jpg'
        nickname='Woodpecker'
        username='TheIncredibleWoodpecker'
      />
      <ListCard
        link=''
        image={`/assets/list-card-${2}.jpg`}
        name='horse betting'
        creatorImage='/icons/duck-icon.jpg'
        nickname='Tonny Delb'
        username='Delb'
      />
      <ListCard
        link=''
        image={`/assets/list-card-${3}.jpg`}
        name='Banana Party'
        creatorImage='/icons/monkey-icon.jpg'
        nickname='President'
        username='TheMonkey'
      />
      <Link href=''>
        <a className={`w-full py-5 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '',
          color: colorTheme,
          fontSize: `${baseSize}xl`
        }}>
          Show more
        </a>
      </Link>
    </div>
  )
}

export default DiscoverLists

import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import ListCard from './list-card'

const DiscoverLists = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full flex flex-col border-b ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`}>
      <h2 className='text-xl font-bold tracking-wide px-4 py-3'>
        Discover new Lists
      </h2>
      <ListCard
        link=''
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
        nickname='num lembro'
        username='President'
      />
      <Link href=''>
        <a className={`w-full py-5 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000',
          color: colorTheme
        }}>
          Show more
        </a>
      </Link>
    </div>
  )
}

export default DiscoverLists

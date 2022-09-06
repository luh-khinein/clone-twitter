import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import WhoToFollowCard from './who-to-follow-card'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'

const PeoplesToFollowCard: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className='w-timeline pt-2 mt-1'>
      <div className='py-2 flex flex-col w-full'>
        <h2 className='px-3 font-bold' style={{
          fontSize: `${xlSize}px`
        }}>
          Who to follow
        </h2>
        <div className='flex flex-col mt-5'>
          <WhoToFollowCard
            image='/icons/woodpecker-icon.jpg'
            nickname='Woodpecker'
            username='@TheIncredibleWoodpecker'
            description='????'
            link=''
          />
          <WhoToFollowCard
            image='/icons/duck-icon.jpg'
            nickname='Tonny Delb'
            username='@Delb'
            description=''
            link=''
          />
          <WhoToFollowCard
            image='/icons/monkey-icon.jpg'
            nickname='President'
            username='@TheMonkey'
            description=''
            link=''
          />
          <Link href=''>
            <a className={`py-3 px-4 w-[598px] ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`}
              style={{
                fontSize: `${smSize}px`,
                color: colorTheme,
                background: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}
            >
              Show more
            </a>
          </Link>
        </div>
        {/* make some comments before */}
      </div>
    </div>
  )
}

export default PeoplesToFollowCard 

import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Image from 'next/image'
import Layout from '../../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'
import ListCard from '../../../components/list/list-card'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/router'

const SuggestedList: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize, xlSize, exXlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Layout searchBar={true} hCard={true} fCard={false} stickyPosition={0}>
      <section className={`w-timeline h-screen border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} items-center pt-8`} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className='w-[598px] z-10 backdrop-blur-sm min-w-min flex justify-between items-center py-2 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='flex items-center px-3'>
            <button
              onClick={() => router.back()}
              className={`p-2 mr-5 flex justify-center items-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 active:brightness-125'} duration-200`}
              style={{
                backgroundColor: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}>
              <BsArrowLeft className='w-5 h-5' />
            </button>
            <h1 className='font-bold' style={{
              fontSize: `${xlSize}px`
            }}>
              Suggested Lists
            </h1>
          </div>
        </div>
        <div className={`w-full px-3 py-5 flex flex-col border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <Image
            src='/assets/discover-lists.png'
            alt='Discover lists'
            width={598}
            height={200}
          />
          <span className='font-bold px-5' style={{ fontSize: `${exXlSize}px` }}>
            Choose your Lists
          </span>
          <span className={`px-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            When you follow a List, you&apos;ll be able to quickly keep up with the experts on
            what you care about most.
          </span>
        </div>
        <div className='p'>
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
            link='/i/lists/2'
            image={`/assets/list-card-${2}.jpg`}
            name='horse betting'
            creatorImage='/icons/duck-icon.jpg'
            nickname='Tonny Delb'
            username='Delb'
          />
          <ListCard
            link='/i/lists/3'
            image={`/assets/list-card-${3}.jpg`}
            name='Banana Party'
            creatorImage='/icons/monkey-icon.jpg'
            nickname='President'
            username='TheMonkey'
          />
        </div>
      </section>
    </Layout>
  )
}

export default SuggestedList

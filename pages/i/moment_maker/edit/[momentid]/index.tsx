import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft, BsSliders } from 'react-icons/bs'
import MomentsLayout from '../../../../../components/layouts/moments-layout'
import MomentsNavBar from '../../../../../components/moments/moments-id-navbar'
import Selector from '../../../../../components/moments/selector'
import { darkTheme, lightTheme } from '../../../../../libs/colors'
import { FontSizeContext } from '../../../../../utils/font-size'
import { ThemeContext } from '../../../../../utils/theme'
import { RiUser3Fill } from 'react-icons/ri'
import MomentsLikedEmpty from '../../../../../components/moments/moments-liked-empty'
import FilterPopup from '../../../../../components/moments/filter-popup'
import NewMomentLayout from '../../../../../components/moments/new-moment-layout'

const MomentId: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const [selectedTweets, setSelectedTweets] = useState(0)
  const refFilterButton = useRef<HTMLButtonElement>(null)
  const [filterPopup, setFilterPopup] = useState(false)
  const handleFilterPopup = useCallback(() => {
    setFilterPopup(!filterPopup)
  }, [filterPopup])
  // Get this later
  const id = 1
  const user_image = ''
  const username = 'username'
  const nickname = 'nickname'
  return (
    <MomentsLayout buttonIsActive={false}>
      <section className={`w-full pt-12 lg:max-w-[318px] xl:max-w-[388px] flex flex-col border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='w-full lg:max-w-[316px] xl:max-w-[386px] z-10 flex items-center py-2 px-3 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightnes-110'}`}
            style={{
              background: backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
            }}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            Add Tweets
          </h1>
        </div>
        <MomentsNavBar
          id={id}
        />
        <Selector
          selectedTweets={selectedTweets}
        />
        <div className={`w-full flex items-center justify-between px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{ fontSize: `${smSize}px` }}>
          <span className={`mr-2 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            Liked by
          </span>
          <Link href={`/${username}`}>
            <a className='flex items-center'>
              <div className='hover:underline mr-3 flex items-center'>
                {user_image !== '' ? (
                  <Image
                    src={user_image}
                    alt={username}
                    width={10}
                    height={10}
                    className='rounded-full'
                  />
                ) : (
                  <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
                    <RiUser3Fill className='w-3 h-3' />
                  </div>
                )}
                <span className='font-bold ml-3'>
                  {nickname}
                </span>
              </div>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-800'}`}>
                @{username}
              </span>
            </a>
          </Link>
          <button
            ref={refFilterButton}
            onClick={handleFilterPopup}
            className={`p-2 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
            }}
          >
            <BsSliders className='w-5 h-5' />
          </button>
        </div>
        <MomentsLikedEmpty />
      </section>
      <NewMomentLayout />
      {filterPopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleFilterPopup}>
          <FilterPopup
            filterButton={refFilterButton}
          />
        </div>
      )}
    </MomentsLayout>
  )
}

export default MomentId

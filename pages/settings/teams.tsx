import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Teams: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='mb-5 flex items-center'>
          <button
            onClick={() => router.back()}
            className={`rounded-full p-2 flex items-center justify-center mr-5 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            TweetDeck Teams
          </h1>
        </div>
        <span className='px-3 mb-5' style={{ fontSize: `${exSmSize}px` }}>
          Invite anyone to teet from this account using the Teams feature in TweetDeck.
        </span>
        <div className={`py-2 px-3 flex flex-col w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-zinc-800'}`}>
          <div className='w-full mb-1 flex justify-between items-center'>
            <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
              Turn on TweetDeck Teams
            </span>
            <input
              type='checkbox'
              role='switch'
            />
          </div>
          <span style={{ fontSize: `${exSmSize}px` }}>
            When this setting is on, you can invite anyone to Tweet from this account using TweetDeck Teams.
            <Link href='/home' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
        </div>
        <div className='w-full flex items-center justify-between px-2 py-2'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Allow anyone to add you to their team
          </span>
          <input
            type='radio'
          />
        </div>
        <div className='w-full flex items-center justify-between px-2 py-2'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Only allow people you follow to add you to their team
          </span>
          <input
            type='radio'
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Teams

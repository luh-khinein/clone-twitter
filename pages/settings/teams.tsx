import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import TeamsPermition from '../../components/settings/teams-permition'
import s from '../../styles/toggle-switch.module.css'

const Teams: NextPage = () => {
  const { backgroundTheme, colorTheme, lightColorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
    document.documentElement.style.setProperty(
      '--light-color-theme', lightColorTheme
    )
  }, [colorTheme])

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='mb-5 flex items-center px-3'>
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
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Invite anyone to teet from this account using the Teams feature in TweetDeck.
        </span>
        <div className={`py-2 px-3 flex flex-col w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-zinc-800'}`}>
          <div className='w-full mb-1 flex justify-between items-center'>
            <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
              Turn on TweetDeck Teams
            </span>
            <input
              type='checkbox'
              className={s.toggle}
            />
          </div>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            When this setting is on, you can invite anyone to Tweet from this account using TweetDeck Teams.
            <Link href='/home' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
        </div>
        <TeamsPermition />
      </section>
    </SettingsLayout>
  )
}

export default Teams

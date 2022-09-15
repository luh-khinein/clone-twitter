import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Age: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  // Get later
  const age = '00'
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Age
          </h1>
        </div>
        <span className={`px-3 mb-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
          If you haven't provided a date of birth, we've provided an age range based on your Twitter profile and activity.
          Age information is used to personalize your experience.
          <Link href='/home'>
            <a target='_blank' style={{ color: colorTheme }}>
              &nbsp;Learn more
            </a>
          </Link>
        </span>
        <div className={`w-full px-3 py-3 mb-3 flex border-y ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{ fontSize: `${baseSize}px` }}>
          {age}
        </div>
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
          Not right? You can add your date of birth to your profile without sharing it publicly.
        </span>
      </section>
    </SettingsLayout>
  )
}

export default Age

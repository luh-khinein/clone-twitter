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
import SettingsButton from '../../../components/settings/settings-button'

const Preferences: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 mb-5 flex items-center'>
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
            Preferences
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Select your preferences by notification type.
          <Link href='/home' target='_blank'>
            <a style={{ color: colorTheme }}>
              &nbsp;Learn more
            </a>
          </Link>
        </span>
        <SettingsButton
          name='Push notifications'
          definition=''
          link='/home'
          hasIcon={false}
        />
        <SettingsButton
          name='Email notifications'
          definition=''
          link='/home'
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default Preferences

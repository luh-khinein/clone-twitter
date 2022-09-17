import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const MuteAndBlock: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center mb-5 px-3'>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 rounded-full flex items-center justify-center duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Mute and block
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage the accounts, words, and notifications that you've muted or blocked.
        </span>
        <SettingsButton
          name='Blocked accounts'
          definition=''
          link='/settings/blocked/all'
          hasIcon={false}
        />
        <SettingsButton
          name='Muted accounts'
          definition=''
          link='/settings/muted/all'
          hasIcon={false}
        />
        <SettingsButton
          name='Muted words'
          definition=''
          link='/settings/muted_keywords'
          hasIcon={false}
        />
        <SettingsButton
          name='Muted notifications'
          definition=''
          link='/settings/notifications/advanced_filters'
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default MuteAndBlock 

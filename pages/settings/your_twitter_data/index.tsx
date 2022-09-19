import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import SettingsButton from '../../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const YourTwitterData: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            Your Twitter data
          </h1>
        </div>
        <SettingsButton
          name='Account'
          link='/settings/your_twitter_data/account'
          definition=''
          hasIcon={false}
        />
        <SettingsButton
          name='Account history'
          link='/settings/your_twitter_data/account_history'
          definition=''
          hasIcon={false}
        />
        <SettingsButton
          name='Apps, devices & information'
          link='/settings/your_twitter_data/devices'
          definition=''
          hasIcon={false}
        />
        <SettingsButton
          name='Account activity'
          link='/settings/your_twitter_data/account_activity'
          definition=''
          hasIcon={false}
        />
        <SettingsButton
          name='Interests and ads data'
          link='/settings/your_twitter_data/ads'
          definition=''
          hasIcon={false}
        />
        <SettingsButton
          name='Download archive'
          link='/settings/download_your_data'
          definition=''
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default YourTwitterData

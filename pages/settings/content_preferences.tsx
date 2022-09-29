import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import LanguageSelector from '../i/flow/language_selector'
import Explore from './explore'
import Search from './search'

const ContentPreferences: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <h1 className='font-bold px-3 mb-3' style={{ fontSize: `${xlSize}px` }}>
          Content preferences
        </h1>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3 py-2' style={{ fontSize: `${xlSize}px` }}>
            Explore
          </h2>
          <SettingsButton
            name='Explore settings'
            definition=''
            link={`${router.asPath}`}
            alternativeLink='/settings/explore'
            hasIcon={false}
          />
          <SettingsButton
            name='Search settings'
            definition=''
            link={`${router.asPath}`}
            alternativeLink='/settings/search'
            hasIcon={false}
          />
        </div>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3 py-2' style={{ fontSize: `${xlSize}px` }}>
            Languages
          </h2>
          <SettingsButton
            name='Recommendations'
            definition=''
            link={`${router.asPath}`}
            alternativeLink='/i/flow/language_selector'
            hasIcon={false}
          />
          <span className={`px-3 py-1 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Select which languages you want recommended Tweets, people, and trends to include.
          </span>
        </div>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3 py-2' style={{ fontSize: `${xlSize}px` }}>
            Safety
          </h2>
          <SettingsButton
            name='Muted'
            definition=''
            link='/settings/mute_and_block'
            hasIcon={false}
          />
          <SettingsButton
            name='Blocked accounts'
            definition=''
            link='/settings/blocked/all'
            hasIcon={false}
          />
        </div>
        <div className='w-full flex flex-col py-2'>
          <h2 className='font-bold px-3 py-2' style={{ fontSize: `${xlSize}px` }}>
            Personalization and data
          </h2>
          <SettingsButton
            name='Personalization and data'
            definition='Allow some'
            link='/settings/account/personalization'
            hasIcon={false}
          />
        </div>
      </section>
      <Explore />
      <Search />
      <LanguageSelector />
    </SettingsLayout>
  )
}

export default ContentPreferences

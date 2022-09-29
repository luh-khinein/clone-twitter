import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import LanguageSelector from '../i/flow/language_selector'

const Languages: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [languageModal, setLanguageModal] = useState(false)
  const handleLanguageModal = useCallback(() => {
    setLanguageModal(true)
  }, [])
  const router = useRouter()
  const language = 'English'
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 mb-5 items-center flex'>
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
            Languages
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage which languages are used to personalize your Twitter experience.
        </span>
        <div className={`flex flex-col w-full py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3 mb-5' style={{ fontSize: `${xlSize}px` }}>
            Display language
          </h2>
          <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Select your preferred language for headlines, buttons, and other text from Twitter.
          </span>
          <SettingsButton
            name='Display language'
            definition={language}
            link='/settings/display_language'
            alternativeLink='/settings/language'
            hasIcon={false}
          />
        </div>
        <div className={`flex flex-col w-full py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3 mb-5' style={{ fontSize: `${xlSize}px` }}>
            Select additional languages
          </h2>
          <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Select additional languages for the content you want to see on Twitter.
          </span>
          <SettingsButton
            name='Additional languages you speak'
            definition=''
            link={`${router.asPath}`}
            onClick={handleLanguageModal}
            hasIcon={false}
          />
        </div>
        <div className='flex flex-col w-full py-2'>
          <h2 className='font-bold px-3 mb-5' style={{ fontSize: `${xlSize}px` }}>
            Languages you may know
          </h2>
          <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Manage the languages Twitter inferred based on your activity, such as the accounts you follow
            and the Tweets you engage with.
          </span>
          <SettingsButton
            name='Languages you may know'
            definition=''
            link='/settings/your_twitter_data/language'
            hasIcon={false}
          />
        </div>
      </section>
      <LanguageSelector
        isActive={languageModal}
        setIsActive={setLanguageModal}
      />
    </SettingsLayout>
  )
}

export default Languages

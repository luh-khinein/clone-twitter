import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { HiCheck } from 'react-icons/hi'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import Explore from './explore'
import Search from './search'

const ContentYouSee: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckbox = useCallback(() => {
    setCheckbox(!checkbox)
  }, [checkbox])
  const router = useRouter()
  const [exploreModal, setExploreModal] = useState(false)
  const handleExploreModal = useCallback(() => {
    setExploreModal(true)
  }, [])
  const [searchModal, setSearchModal] = useState(false)
  const handleSearchModal = useCallback(() => {
    setSearchModal(true)
  }, [])
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
            Content you see
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Decide what you see on Twitter based on your preferences like Topics and interests
        </span>
        <div className='px-3 flex items-center mb-3 justify-between w-full'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Display media that may contain sensitive content
          </span>
          <div onClick={handleCheckbox} className={`p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
          }}>
            <input
              type='checkbox'
              checked={checkbox}
              className={`w-6 h-6 appearance-none rounded-md cursor-pointer outline-none border-2 ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'} checked:bg-blue-500 checked:border-none transition-all`}
            />
            {checkbox && (<HiCheck className='absolute' />)}
          </div>
        </div>
        <SettingsButton
          name='Topics'
          definition=''
          link='/username/topics'
          hasIcon={false}
        />
        <SettingsButton
          name='Interests'
          definition=''
          link='/settings/your_twitter_data/twitter_interests'
          hasIcon={false}
        />
        <SettingsButton
          name='Explore settings'
          definition=''
          link={`${router.asPath}`}
          onClick={handleExploreModal}
          hasIcon={false}
        />
        <SettingsButton
          name='Search settings'
          definition=''
          link={`${router.asPath}`}
          onClick={handleSearchModal}
          hasIcon={false}
        />
      </section>
      <Explore
        isActive={exploreModal}
        setIsActive={setExploreModal}
      />
      <Search
        isActive={searchModal}
        setIsActive={setSearchModal}
      />
    </SettingsLayout>
  )
}

export default ContentYouSee

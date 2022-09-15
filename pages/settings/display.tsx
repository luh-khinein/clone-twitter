import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import DisplayBackgroundBox from '../../components/settings/display-background-box'
import DisplayColorBox from '../../components/settings/display-color-box'
import DisplayFontSizeBox from '../../components/settings/display-font-size-box'
import DisplayTweetBox from '../../components/settings/display-tweet-box'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Display: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`py-2 flex flex-col items-start justify-start w-timeline h-screen border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            Display
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage your font size, color, and background. These settings affect all the Twitter accounts on
          this browser.
        </span>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className={`border-b py-2 px-3 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            <DisplayTweetBox />
          </div>
          <div className={`w-full flex border-b py-2 px-3 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            <DisplayFontSizeBox />
          </div>
          <div className={`w-full flex border-b py-2 px-3 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            <DisplayColorBox />
          </div>
          <div className='w-full flex py-2 px-3'>
            <DisplayBackgroundBox />
          </div>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Display

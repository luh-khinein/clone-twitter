import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Language: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const languageList = 'English' // fix this later
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
            Language
          </h1>
        </div>
        <span className={`px-3 py-2 mb-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100 text-slate-400' : backgroundTheme === 'black' ? 'border-zinc-800 text-zinc-400' : 'border-slate-800 text-slate-800'}`} style={{ fontSize: `${baseSize}px` }}>
          This is your account's primary language setting.
        </span>
        <span className='px-3' style={{ fontSize: `${baseSize}px` }}>
          {languageList}
        </span>
      </section>
    </SettingsLayout>
  )
}

export default Language

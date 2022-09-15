import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import GenderChoice from '../../../components/settings/gender-choice'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Gender: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
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
            Gender
          </h1>
        </div>
        <span className={`px-3 mb-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
          If you haven't already specified a gender, this is the one assocated with your
          account based on your profile and activity. This information won't be displayed publicly.
        </span>
        <GenderChoice />
        <div className='w-full px-3 mt-3 flex justify-end'>
          <button
            className='flex items-center justify-center py-1.5 px-3 text-white rounded-full duration-200 hover:brightness-95'
            style={{
              background: colorTheme
            }}
          >
            Save
          </button>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Gender

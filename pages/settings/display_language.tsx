import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/select.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md'

const DisplayLanguage: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const language = 'Some - language'

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
    if (backgroundTheme === 'light') {
      document.documentElement.style.setProperty(
        '--border-color', 'rgb(243, 244, 246)'
      )
    } else if (backgroundTheme === 'dark') {
      document.documentElement.style.setProperty(
        '--border-color', 'rgb(30, 41, 59)'
      )
    } else {
      document.documentElement.style.setProperty(
        '--border-color', 'rgb(39, 39, 42)'
      )
    }
  }, [backgroundTheme, colorTheme])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--base-font-size', `${baseSize}px`
    )
  }, [baseSize])

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            <BsArrowLeft className='h-5 w-5' />
          </button>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Change display language
          </h1>
        </div>
        <div className='relative w-full px-3 flex'>
          <select
            name='languages'
            className={`${s.form_select} w-full rounded-xl`}
          >
            <option value='Portuguese - português'>Portuguese - português</option>
            <option selected={true} value={language}>{language}</option>
            <option value='English'>English</option>
          </select>
          <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <span className={s.form_label}>
              Display language
            </span>
            <span className={s.form_icon}>
              <MdKeyboardArrowDown className='h-10 w-10' />
            </span>
          </label>
        </div>
        <span className={`px-5 pb-5 mt-1 w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100 text-slate-400' : backgroundTheme === 'black' ? 'border-zinc-800 text-zinc-400' : 'border-slate-800 text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Select your preferred language for headlines, buttons, and other text from Twitter on this
          account. This does not change the language of the content you see in your timeline.
        </span>
        <div className='w-full flex py-5 px-3 justify-end'>
          <button className='px-4 py-1.5 flex items-center justify-center rounded-full duration-200 hover:brightness-95 text-white' style={{ background: colorTheme }}>
            Save
          </button>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default DisplayLanguage

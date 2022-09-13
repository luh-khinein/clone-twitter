import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { HiCheck } from 'react-icons/hi'
import SettingsButton from '../../components/settings/settings-button'

const YourTweets: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckbox = useCallback(() => {
    setCheckbox(!checkbox)
  }, [checkbox])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 flex items-center justify-center mr-5 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Your Tweets
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage the information associated with your Tweets.
        </span>
        <div className='flex flex-col w-full px-3'>
          <div className='flex items-center w-full justify-between'>
            <span style={{ fontSize: `${baseSize}px` }}>
              Mark media you Tweet as having material that may be sensitive
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
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            When enabled, pictures and videos you Tweet will be marked as sensitive for people who don't
            want to see sensitive content.
            <Link href='/home' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
        </div>
        <SettingsButton
          name='Add location information to your Tweets'
          definition=''
          link='/home'
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default YourTweets 

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { IoAddSharp } from 'react-icons/io5'

const MutedKeywords: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center w-full justify-between px-3'>
          <div className='flex items-center'>
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
              Muted words
            </h1>
          </div>
          <Link href='/settings/add_muted_keyword'>
            <a className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}
            >
              <IoAddSharp className='w-5 h-5' />
            </a>
          </Link>
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-20'>
          <Image
            src='/assets/not-interested-empty.png'
            width={336}
            height={168}
            alt='papagaio'
          />
          <div className='w-full flex flex-col mt-5 px-32'>
            <span className='text-3xl font-bold'>
              Add muted words
            </span>
            <span className={`mt-1 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
              When you mute words, you won't get any new notifications for Tweets that include them or see Tweets with those words in your Home timeline.
              <Link href='/en/demo-page'>
                <a target='_blank' style={{ color: colorTheme }}>
                  &nbsp;Learn more
                </a>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default MutedKeywords

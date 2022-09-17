import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Locations: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, smSize, xlSize } = useContext(FontSizeContext)
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
            See places you've been
          </h1>
        </div>
        <span className={`px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100 text-slate-400' : backgroundTheme === 'black' ? 'border-zinc-800 text-zinc-400' : 'border-slate-800 text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          These are the places Twitter uses to show you more relevant content. You won't see
          places listed here if you turned off "Personalize based on places you've been".
        </span>
        <div className='w-full mt-3 flex flex-col items-center justify-center'>
          <span style={{ fontSize: `${xlSize}px` }}>
            This setting is off.
          </span>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Go to your
            <Link href='/home'>
              <a target='_blank' style={{ color: colorTheme }}>
                &nbsp;location settings&nbsp;
              </a>
            </Link>
            to turn it on.
          </span>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Locations

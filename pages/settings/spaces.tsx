import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import s from '../../styles/toggle-switch.module.css'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Spaces: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='mb-5 flex items-center px-3'>
          <button
            onClick={() => router.back()}
            className={`rounded-full p-2 flex items-center justify-center mr-5 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Spaces
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage who can see your Spaces listening activity
        </span>
        <div className='py-2 px-3 flex flex-col w-full'>
          <div className='w-full mb-1 flex justify-between items-center'>
            <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
              Allow followers to see which Spaces you're listening to
            </span>
            <input
              type='checkbox'
              className={s.toggle}
            />
          </div>
        </div>
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Keep in mind that even with this setting turned off you will be visible to everyone when you're in a
          Space. Your followers can always see what Spaces you're hosting, co-hosting or speaking in.
          <Link href='/home' target='_blank'>
            <a style={{ color: colorTheme }}>
              &nbsp;Learn more
            </a>
          </Link>
        </span>
      </section>
    </SettingsLayout>
  )
}

export default Spaces

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { GrPersonalComputer } from 'react-icons/gr'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import SessionButton from '../../../components/settings/session-button'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Sessions: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-staart justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            Sessions
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Sessions are the devices you are using or that have used your Twitter account. These are the sessions
          where your account is curretly logged in. You can log out of each session.
        </span>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Current active session
          </h2>
          <span className={`px-3 mb-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            You're logged into this Twitter account on this device and are currently using it.
          </span>
          <SessionButton
            link='/home'
            device={<GrPersonalComputer className='w-5 h-5' />}
            system='Windows'
            local='Some local'
            date='Active now'
          />
        </div>
        <div className='flex flex-col w-full py-2'>
          <h2 className='px-3 mb-5 font-bold' style={{ fontSize: `${xlSize}px` }}>
            Log out of other sessions
          </h2>
          <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            You're logged into these accounts on these devices and aren't currently using them.
          </span>
          <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Logging out will end 1 of your other active Twitter sessions. It won't affect your current active sessison.
            <Link href='/en/demo-page'>
              <a target='_blank' style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
          <button className='flex w-full py-4 px-3 items-center justify-start outline-none duration-200 text-red-600 hover:bg-[rgba(255,90,90,.1)]' style={{
            fontSize: `${baseSize}px`
          }}>
            Log out of all other sessions
          </button>
          <SessionButton
            link='/home'
            device={<GrPersonalComputer className='w-5 h-5' />}
            system='Windows'
            local='Some local'
            date='2 days ago'
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Sessions

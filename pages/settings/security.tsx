import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Security: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 flex items-center mb-5'>
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
            Security
          </h1>
        </div>
        <div className={`w-full flex flex-col py-2 mb-5 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3 mb-5' style={{ fontSize: `${xlSize}px` }}>
            Two-factor authentication
          </h2>
          <span className='px-3 mb-5' style={{ fontSize: `${exSmSize}px` }}>
            Help protect your account from unauthorized access by requiring a second authentication method in
            addition to your Twitter password. You can choose a text message, authentication app, or security key.
            <Link href='/home' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
          <SettingsButton
            name='Two-factor authentication'
            definition=''
            link='/home'
            hasIcon={false}
          />
        </div>
        <div className='px-3 flex flex-col'>
          <h2 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            Additional password protection
          </h2>
          <span className='mb-5' style={{ fontSize: `${exSmSize}px` }}>
            Enabling this setting adds extra security to your account by requiring additional information to reset your
            password. If enabled, you must provide either the phone number or email address associated with your
            account in order to reset your password.
          </span>
          <div className='flex items-center w-full justify-between'>
            <div className='flex flex-col items-start'>
              <span className='mb-1' style={{ fontSize: `${baseSize}px` }}>
                Password reset protect
              </span>
              <Link href='/home' target='_blank'>
                <a style={{ fontSize: `${exSmSize}px`, color: colorTheme }}>
                  Learn more
                </a>
              </Link>
            </div>
            <div className={`p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}>
              <input
                type='checkbox'
                className='w-4 h-4 border-2 outline-none'
              />
            </div>
          </div>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Security

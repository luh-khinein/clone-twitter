import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import Checkbox from '../../components/settings/checkbox'

const Security: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckbox = useCallback(() => {
    setCheckbox(!checkbox)
  }, [checkbox])
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
          <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
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
        <div className='flex flex-col'>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Additional password protection
          </h2>
          <span className={`mb-5 px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Enabling this setting adds extra security to your account by requiring additional information to reset your
            password. If enabled, you must provide either the phone number or email address associated with your
            account in order to reset your password.
          </span>
          <Checkbox
            id='pass_reset'
            name='Password reset protect'
            description=''
            hasMoreLink={true}
            moreLink='/home'
            isChecked={checkbox}
            handleChecked={handleCheckbox}
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Security

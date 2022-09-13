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
import SettingsButton from '../../components/settings/settings-button'
import Checkbox from '../../components/settings/checkbox'

const Contacts: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [checkbox, setCheckbox] = useState({
    find_you_email: false,
    find_you_phone: false,
  })
  const handleCheckbox = useCallback((e: any) => {
    e.persist
    setCheckbox(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 flex items-center mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 rounded-full mr-5 flex items-center jsutify-center duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Discoverability and contacts
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Control your dicoverability settings and manage contacts you've imported.
        </span>
        <div className={`flex flex-col w-full py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Discoverability
          </h2>
          <span className={`mb-5 px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Decide whether people who have your email address or phone number can find and connect with
            you on Twitter.
          </span>
          <Checkbox
            id='find_you_email'
            name='Let people who have your email address find you on Twitter'
            description='Let people who have your email address find and connect with you on Twitter.'
            hasMoreLink={true}
            moreLink='/home'
            isChecked={checkbox.find_you_email}
            handleChecked={handleCheckbox}
          />
          <Checkbox
            id='find_you_phone'
            name='Let people who have your phone number find you on Twitter'
            description='Let people who have your phone number find and connect with you on Twitter.'
            hasMoreLink={true}
            moreLink='/home'
            isChecked={checkbox.find_you_phone}
            handleChecked={handleCheckbox}
          />
        </div>
        <div className='w-full flex flex-col py-2'>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Contacts
          </h2>
          <span className={`mb-1 px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Manage contacts that you have imported from your mobile devices.
            <Link href='/home' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
          <SettingsButton
            name='Manage contacts'
            definition=''
            link='/home'
            hasIcon={false}
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Contacts

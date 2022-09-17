import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import Checkbox from '../../../components/settings/checkbox'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const MutedNotifications: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [muteSettings, setMuteSettings] = useState({
    you_no_follow: false,
    who_no_follow: false,
    with_new: false,
    have_default_photo: false,
    have_no_confirmed_email: false,
    have_no_confirmed_phone: false,
  })
  const handleMuteSettings = useCallback((e: any) => {
    e.persist()
    setMuteSettings(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
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
            Muted notifications
          </h1>
        </div>
        <h2 className='font-bold px-3 mb-3' style={{ fontSize: `${xlSize}px` }}>
          Mute notificatioons from people:
        </h2>
        <Checkbox
          id='you_no_follow'
          name="You don't follow"
          description=''
          hasMoreLink={false}
          isChecked={muteSettings.you_no_follow}
          handleChecked={handleMuteSettings}
        />
        <Checkbox
          id='who_no_follow'
          name="Who don't follow you"
          description=''
          hasMoreLink={false}
          isChecked={muteSettings.who_no_follow}
          handleChecked={handleMuteSettings}
        />
        <Checkbox
          id='with_new'
          name='With a new account'
          description=''
          hasMoreLink={false}
          isChecked={muteSettings.with_new}
          handleChecked={handleMuteSettings}
        />
        <Checkbox
          id='have_default_photo'
          name='Who have a default profile photo'
          description=''
          hasMoreLink={false}
          isChecked={muteSettings.have_default_photo}
          handleChecked={handleMuteSettings}
        />
        <Checkbox
          id='have_no_confirmed_email'
          name="Who haven't confirmed their email"
          description=''
          hasMoreLink={false}
          isChecked={muteSettings.have_no_confirmed_email}
          handleChecked={handleMuteSettings}
        />
        <Checkbox
          id='have_no_confirmed_phone'
          name="Who haven't confirmed their phone number"
          description=''
          hasMoreLink={false}
          isChecked={muteSettings.have_no_confirmed_phone}
          handleChecked={handleMuteSettings}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          These filters won't affect notifications from people you follow.
          <Link href='/en/demo-page'>
            <a target='_blank' style={{ color: colorTheme }}>
              &nbsp;Learn more
            </a>
          </Link>
        </span>
      </section>
    </SettingsLayout>
  )
}

export default MutedNotifications

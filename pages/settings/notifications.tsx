import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { BsPhoneVibrate, BsSliders } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Notifications: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen py-2 flex flex-col justify-start items-start border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex flex-col px-3 mb-5'>
          <h1 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            Notifications
          </h1>
          <span style={{ fontSize: `${exSmSize}px` }}>
            Select the kinds of notifications you get about your activities, interests, and recommendations.
          </span>
        </div>
        <SettingsButton
          name='Filters'
          definition="Choose the notifications you'd like to see — and those you don't."
          link='/home'
          icon={<BsSliders />}
        />
        <SettingsButton
          name='Preferences'
          definition="Select your preferences by notifications type."
          link='/home'
          icon={<BsPhoneVibrate />}
        />
      </section>
    </SettingsLayout>
  )
}

export default Notifications

import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { RiFileCopyLine, RiLockLine } from 'react-icons/ri'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const SecurityAndAccess: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`flex flex-col w-timeline items-start justify-start py-2 h-screen border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='w-full flex flex-col mb-5 px-3'>
          <h1 className='font-bold mb-5' style={{
            fontSize: `${xlSize}px`
          }}>
            Security and account access
          </h1>
          <span style={{ fontSize: `${exSmSize}px` }}>
            Manage your account's security and keep track of your account's usage including apps that you have
            connected to your account.
          </span>
        </div>
        <SettingsButton
          name='Security'
          definition="Manage your account's security"
          link='/home'
          icon={<RiLockLine />}
        />
        <SettingsButton
          name='Apps and sessions'
          definition="See information about when you logged into your account and the apps you connected to your account."
          link='/home'
          icon={<RiFileCopyLine />}
        />
        <SettingsButton
          name='Connected accounts'
          definition="Manage Google or Apple accounts connected to Twitter to log in."
          link='/home'
          icon={<HiOutlineSwitchHorizontal />}
        />
      </section>
    </SettingsLayout>
  )
}

export default SecurityAndAccess

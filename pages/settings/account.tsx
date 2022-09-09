import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { FiDownload } from 'react-icons/fi'
import { RiUser3Line } from 'react-icons/ri'
import { VscKey } from 'react-icons/vsc'
import { TbHeartBroken, TbUsers } from 'react-icons/tb'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Account: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`flex flex-col w-timeline py-2 items-start justify-start h-full border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex flex-col w-full items-start justify-start px-3 mb-5'>
          <h1 className='font-bold mb-5' style={{
            fontSize: `${xlSize}px`
          }}>
            Your Account
          </h1>
          <span className='text-start' style={{
            fontSize: `${exSmSize}px`
          }}>
            See information about your acount, download an achive of your data, or learn about your account
            deactivation options
          </span>
        </div>
        <SettingsButton
          name='Account information'
          definition='See your account information like your phone number and email address.'
          link='/home'
          icon={<RiUser3Line />}
        />
        <SettingsButton
          name='Change your password'
          definition='Change your password at any time.'
          link='/home'
          icon={<VscKey style={{ transform: 'rotate(-180deg)' }} />}
        />
        <SettingsButton
          name='Download an archive of your data'
          definition='Get insights into the type of information stored for your account.'
          link='/home'
          icon={<FiDownload />}
        />
        <SettingsButton
          name='TweekDeck Teams'
          definition='Invite anyone to Tweet from this account using the Teams feature in TweetDeck.'
          link='/home'
          icon={<TbUsers />}
        />
        <SettingsButton
          name='Deactivate your account'
          definition='Find out how you can deactivate your account.'
          link='/home'
          icon={<TbHeartBroken />}
        />
      </section>
    </SettingsLayout>
  )
}

export default Account


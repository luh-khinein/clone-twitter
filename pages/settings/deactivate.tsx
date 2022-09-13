import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { RiUser3Fill } from 'react-icons/ri'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { useRouter } from 'next/router'

const Deactivate: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  // ** Get this later ** //
  let user_image = ''
  const nickname = 'nickname'
  const username = '@username'
  // ******************** //
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            Deactivate account
          </h1>
        </div>
        <div className='flex items-center px-3 mb-5'>
          {user_image !== '' ? (
            // change this later
            <div className={`w-[45px] h-[45px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
              <RiUser3Fill className='w-24 h-24' />
            </div>
          ) : (
            <div className={`w-[45px] h-[45px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
              <RiUser3Fill className='w-8 h-8' />
            </div>
          )}
          <div className='flex flex-col items-start justify-start ml-2'>
            <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
              {nickname}
            </span>
            <span style={{ fontSize: `${baseSize}px` }}>
              {username}
            </span>
          </div>
        </div>
        <div className='flex flex-col mb-5 px-3'>
          <h2 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            This will deactivate your account
          </h2>
          <span style={{ fontSize: `${exSmSize}px` }}>
            You're about to start the process of deactivating your Twitter account. Your display name, @username,
            and public profile will no longer be viewable on Twitter.com, Twitter for iOS, or Twitter for Android.
          </span>
        </div>
        <div className={`flex flex-col px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            What else you should know
          </h2>
          <span style={{ fontSize: `${exSmSize}px` }}>
            You can restore your Twiter account if it was accidentally or wrongfully deactivated for up to 30 days after
            deactivation.
          </span>
        </div>
        <div className={`flex px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <span style={{ fontSize: `${exSmSize}px` }}>
            Some account information may still be available in search engines, such as Google or Bing.
            <Link href='/home' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
        </div>
        <div className={`flex px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <span style={{ fontSize: `${exSmSize}px` }}>
            If you just want to change your @username, you don't need to deactivate your account — edit it in your
            <Link href='/settings/your_twitter_data/account'>
              <a style={{ color: colorTheme }}>
                &nbsp;settings
              </a>
            </Link>.
          </span>
        </div>
        <div className={`flex px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <span style={{ fontSize: `${exSmSize}px` }}>
            To use your current @username or email address with a different Twitter account,
            <Link href='/settings/your_twitter_data/account'>
              <a style={{ color: colorTheme }}>
                &nbsp;change them&nbsp;
              </a>
            </Link>
            before you deactivate this account.
          </span>
        </div>
        <div className={`flex px-3 py-2 border-b mb-1 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <span style={{ fontSize: `${exSmSize}px` }}>
            If you want to download
            <Link href='/settings/your_twitter_data/account'>
              <a style={{ color: colorTheme }}>
                &nbsp;your Twitter data
              </a>
            </Link>,&nbsp;
            you'll need to complete both the request and download process before deactivating your account.
            Links to download your data cannot be sent to deactivated accounts.
          </span>
        </div>
        <button className='flex w-full py-4 items-center justify-center outline-none duration-200 text-red-500 hover:bg-[rgba(255,90,90,.2)]' style={{
          fontSize: `${baseSize}px`
        }}>
          Deactivate
        </button>
      </section>
    </SettingsLayout>
  )
}

export default Deactivate

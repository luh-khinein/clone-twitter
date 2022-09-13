import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import InformationButton from '../../components/settings/information-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { useRouter } from 'next/router'

const DownloadYourData: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 pb-10 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex flex-col mb-5'>
          <div className='flex items-center px-3 mb-4'>
            <button
              onClick={() => router.back()}
              className={`p-2 rounded-full flex items-center justify-center mr-5 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
              style={{
                background: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}>
              <BsArrowLeft className='w-5 h-5' />
            </button>
            <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
              Download an archive of your data
            </h1>
          </div>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'} px-3`} style={{ fontSize: `${exSmSize}px` }}>
            Get insights into the type of information stored for your account.
          </span>
        </div>
        <div className={`flex flex-col w-full px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            Twitter data
          </h2>
          <span className={`mb-5 w-full ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            You can request a ZIP file with an archive of your account information, account history, apps and devices,
            account activity, interests, and Ads data. You'll get an in-app notification when the archive of your data is
            ready to download.
            <Link href='/home' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
          <div className='flex items-center justify-between'>
            <span style={{ fontSize: `${baseSize}px` }}>
              Twitter
            </span>
            <button className='py-1.5 px-5 flex items-center justify-center text-white rounded-full hover:brightness-110' style={{
              fontSize: `${baseSize}px`,
              background: colorTheme
            }}>
              Request archive
            </button>
          </div>
        </div>
        <div className='flex flex-col py-2 w-full'>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Periscope data
          </h2>
          <InformationButton
            name='You can request an archive of your Periscope data on Periscope directly.'
            link='/home'
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default DownloadYourData

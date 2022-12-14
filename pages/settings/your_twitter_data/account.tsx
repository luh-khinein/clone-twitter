import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import SettingsButton from '../../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'
import AutomatedAccounts from '../../../components/modal/automated_account'

const Account: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [automatedModal, setAutomatedModal] = useState(false)
  const handleAutomatedModal = useCallback(() => {
    setAutomatedModal(true)
  }, [])
  const router = useRouter()
  // ** Get this later ** //
  const username = '@username'
  const email = 'somthing@some.com'
  const creationDate = 'MM DD, YY'
  const creationHour = 'HH:MM:SS PM'
  const ipAddress = '0.0.0.0'
  const country = 'Country'
  const language = 'English'
  const gender = 'Gender'
  const birthday = 'MM DD, YY'
  const age = '00'
  // ******************* //
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`flex flex-col w-timeline h-full items-start justify-start py-2 pb-10 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 flex items-center justify-center mr-5 duration-200 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Account information
          </h1>
        </div>
        <div className={`w-full flex flex-col border-b py-2 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <SettingsButton
            name='Username'
            definition={username}
            link='/settings/screen_name'
            hasIcon={false}
          />
          <SettingsButton
            name='Phone'
            definition=''
            link='/settings/phone'
            hasIcon={false}
          />
          <SettingsButton
            name='Email'
            definition={email}
            link='/settings/email'
            hasIcon={false}
          />
          <div className='flex flex-col px-3 py-2'>
            <span style={{ fontSize: `${baseSize}px` }}>
              Verified
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              No. <span style={{ color: colorTheme }}>Request Verification</span>
            </span>
          </div>
        </div>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <SettingsButton
            name='Protected Tweets'
            definition='No'
            link='/settings/audience_and_tagging'
            hasIcon={false}
          />
          <div className='flex flex-col px-3 py-2'>
            <span style={{ fontSize: `${baseSize}px` }}>
              Account creation
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              {creationDate}, {creationHour}
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              {ipAddress}
            </span>
          </div>
        </div>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <SettingsButton
            name='Country'
            definition={country}
            link='/settings/country'
            hasIcon={false}
          />
          <SettingsButton
            name='Languages'
            definition={language}
            link='/settings/languages'
            hasIcon={false}
          />
          <SettingsButton
            name='Gender'
            definition={gender}
            link='/settings/your_twitter_data/gender'
            hasIcon={false}
          />
          <div className='flex flex-col px-3 py-2'>
            <span style={{ fontSize: `${baseSize}px` }}>
              Birth date
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              {birthday}
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              Add your date of birth to your
              <Link href='/username'>
                <a style={{ color: colorTheme }}>
                  &nbsp;profile
                </a>
              </Link>.
            </span>
          </div>
        </div>
        <div className='flex flex-col py-2 w-full'>
          <SettingsButton
            name='Age'
            definition={age}
            link='/settings/your_twitter_data/age'
            hasIcon={false}
          />
          <SettingsButton
            name='Automation'
            definition='Manage your automated account.'
            link={`${router.asPath}`}
            onClick={handleAutomatedModal}
            hasIcon={false}
          />
        </div>
      </section>
      <AutomatedAccounts
        isActive={automatedModal}
        setIsActive={setAutomatedModal}
      />
    </SettingsLayout>
  )
}

export default Account

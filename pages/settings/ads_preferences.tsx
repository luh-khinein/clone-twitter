import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import Checkbox from '../../components/settings/checkbox'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const AdsPreferences: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [checkboxState, setCheckboxState] = useState(false)
  const handleCheckboxState = useCallback(() => {
    setCheckboxState(!checkboxState)
  }, [checkboxState])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen py-2 flex flex-col items-start justify-start border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 mb-5 flex items-center'>
          <button
            onClick={() => router.back()}
            className={`p-2 rounded-full flex items-center justify-center mr-5 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Ads preferences
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage your ads experience on Twitter.
        </span>
        <Checkbox
          id='personalized_ads'
          name='Personalized ads'
          description='
            you will always see ads on Twitter based on your Twitter activity. When this setting is enabled, 
          Twitter may further personalize ads from Twitter advertisers, on and off Twitter, by combining your 
          Twitter activity with other online activity and informaiton from our partners.
          '
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkboxState}
          handleChecked={handleCheckboxState}
        />
        <SettingsButton
          name='Interests'
          link='/settings/your_twitter_data/twitter_interests'
          definition=''
          hasIcon={false}
        />
        <SettingsButton
          name='Your advertiser list'
          link='/settings/your_twitter_data/audiences'
          definition=''
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default AdsPreferences

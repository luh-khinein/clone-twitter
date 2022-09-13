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

const LocationInformation: NextPage = () => {
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
            Location information
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage the location information Twitter uses to personalize your experience.
        </span>
        <Checkbox
          id='personalized'
          name="Personalize based on places you've been"
          description="
            Twitter always uses some information, like where you signed up and your current location, to help 
            show you more relevant content. When this setting is enabled, Twitter may also personalize your 
          experience based on other places you've been.
          "
          hasMoreLink={false}
          isChecked={checkboxState}
          handleChecked={handleCheckboxState}
        />
        <SettingsButton
          name="See places you've been"
          definition=''
          link='/home'
          hasIcon={false}
        />
        <SettingsButton
          name='Add location information to your Tweets'
          definition=''
          link='/home'
          hasIcon={false}
        />
        <SettingsButton
          name='Explre settings'
          definition=''
          link='/home'
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default LocationInformation

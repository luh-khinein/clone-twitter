import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'
import s from '../../../styles/toggle-switch.module.css'
import Checkbox from '../../../components/settings/checkbox'
import SettingsButton from '../../../components/settings/settings-button'

const Personalization: NextPage = () => {
  const { backgroundTheme, colorTheme, lightColorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [personalizationSettings, setPersonalizationSettings] = useState({
    ads: true,
    inferred_indentity: false,
    places: false,
    business_partners: true,
  })
  const handlePersonalizationSettings = useCallback((e: any) => {
    e.persist()
    setPersonalizationSettings(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
    document.documentElement.style.setProperty(
      '--light-color-theme', lightColorTheme
    )
  }, [colorTheme])

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-full flex flex-col items-start justify-start py-2 pb-10 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            Personalization and data
          </h1>
        </div>
        <span className={`px-3 mb-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Control how Twitter personalizes content and collects and shares certain data.
        </span>
        <div className={`py-2 px-3 flex flex-col w-full border-y ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-zinc-800'}`}>
          <div className='w-full mb-1 flex justify-between items-center'>
            <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
              Personalization and data
            </span>
            <input
              type='checkbox'
              className={s.toggle}
            />
          </div>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            This will enable or disable all of the settings on this page.
          </span>
        </div>
        <div className={`w-full flex flex-col py-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='px-3 mb-3 font-bold' style={{ fontSize: `${xlSize}px` }}>
            Personalization
          </h2>
          <Checkbox
            id='ads'
            name='Personalization ads'
            description="
              You will always see ads on Twitter based on your Twitter activity. When this setting is enabled, 
            Twitter may further personalize ads from Twitter advertisers, on and off Twitter, by combining your 
            Twitter activity with other online activity and information from our partners.
            "
            hasMoreLink={true}
            moreLink='/en/demo-page'
            isChecked={personalizationSettings.ads}
            handleChecked={handlePersonalizationSettings}
          />
          <Checkbox
            id='inferred_indentity'
            name='Personalize based on your inferred identity'
            description="
              Twitter will always personalize your experience based on information you've provided, as well as 
            the devices you've used to log in. When this setting is enabled, Twitter may also personalize 
            based on other inferences about your identity, like devices and browsers you haven't used to log 
            in to Twitter or email addresses and phone numbers similar to those linked to your Twitter account.
            "
            hasMoreLink={true}
            moreLink='/en/demo-page'
            isChecked={personalizationSettings.inferred_indentity}
            handleChecked={handlePersonalizationSettings}
          />
          <Checkbox
            id='places'
            name="Personalize based on the places you've been"
            description="
              Twitter always uses some information, like where you signed up and your current location, to help 
            show you more relevant content. When this setting is enabled, Twitter may also personalize your 
            experience based on other places you've been.
            "
            hasMoreLink={false}
            isChecked={personalizationSettings.places}
            handleChecked={handlePersonalizationSettings}
          />
        </div>
        <div className='w-full flex flex-col py-3'>
          <h2 className='px-3 mb-3 font-bold' style={{ fontSize: `${xlSize}px` }}>
            Data
          </h2>
          <Checkbox
            id='ads'
            name='Allow additional information sharing with business partners'
            description="
              Twitter always shares information with business partners as a way to run and improve its 
            products. When enabled, this allows Twitter to share additional information with those partners to 
            help support running Twitter's business, including making Twitter's marketing activities on other 
            sites and apps more relevant for you.
            "
            hasMoreLink={true}
            moreLink='/en/demo-page'
            isChecked={personalizationSettings.business_partners}
            handleChecked={handlePersonalizationSettings}
          />
          <SettingsButton
            name='See your Twitter data'
            link='/settings/your_twitter_data'
            definition=''
            hasIcon={false}
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Personalization

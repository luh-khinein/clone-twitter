import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { argv0 } from 'process'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import SettingsButton from '../../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Ads: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  // get this later 
  const interestsFromTT = 0
  const interestsFromPartners = 0
  const audiences = 0
  const advertisers = 0
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 mb-5 flex items-center'>
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
            Interests and ads data
          </h1>
        </div>
        <SettingsButton
          name='Interests from Twitter'
          link='/settings/your_twitter_data/twitter_interests'
          definition={`${interestsFromTT} interests`}
          hasIcon={false}
        />
        <SettingsButton
          name='Inferred interests from partners'
          link='/settings/your_twitter_data/partner_interests'
          definition={`${interestsFromPartners} interests`}
          hasIcon={false}
        />
        <SettingsButton
          name='Tailored audiences'
          link='/settings/your_twitter_data/audiences'
          definition={`${audiences} audiences from ${advertisers} advertisers`}
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default Ads

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import SettingsButton from '../../components/settings/settings-button'
import Checkbox from '../../components/settings/checkbox'

const AudienceAndTagging: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckbox = useCallback(() => {
    setCheckbox(!checkbox)
  }, [checkbox])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 flex items-center justify-center mr-5 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Audience and tagging
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage what information you allow other people on Twitter to see.
        </span>
        <Checkbox
          id='protect_tweets'
          name='Protect your Tweets'
          description='When selected, your Tweets and other account information are only visible to people who follow you.'
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkbox}
          handleChecked={handleCheckbox}
        />
        <SettingsButton
          name='Photo tagging'
          definition='Anyone can tag you'
          link='/settings/tagging'
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default AudienceAndTagging

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useState, useCallback } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import Checkbox from '../../../components/settings/checkbox'
import NavBar from '../../../components/settings/nav-bar'
import SettingsButton from '../../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Filters: NextPage = () => {
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
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'black'
                  ? darkTheme.background
                  : ''
            }}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Filters
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Choose the notifications you'd like to see — and those you don't.
        </span>
        <Checkbox
          id='filter'
          name='Quality filter'
          description="
            Choose to filter out content such as duplicate or automated Tweets. This doesn't apply to 
          notifications from accounts you follow or have interacted with recently.
          "
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkboxState}
          handleChecked={handleCheckboxState}
        />
        <SettingsButton
          name='Muted notifications'
          definition=''
          link='/settings/notifications/advanced_filters'
          hasIcon={false}
        />
      </section>
    </SettingsLayout>
  )
}

export default Filters

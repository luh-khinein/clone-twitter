import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import Checkbox from '../../../components/settings/checkbox'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const TwitterInterests: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [topicsFollowed, setTopicsFollowed] = useState({
    history: true
  })
  const handleTopicsFollowed = useCallback((e: any) => {
    e.persist()
    setTopicsFollowed(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center mb-5 px-3'>
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
            Interests
          </h1>
        </div>
        <span className={`px-3 mb-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          These are some of the interests matched to you based on your profile, activity, and the Topics you follow.
          These are used to personalize your experience across Twitter, including the ads you see.
          You can adjust your interests if something doesn't look right. Any changes you make may take a little
          while to go into effect.
        </span>
        <Checkbox
          id='history'
          name='History'
          description=''
          hasMoreLink={false}
          isChecked={topicsFollowed.history}
          handleChecked={handleTopicsFollowed}
        />
      </section>
    </SettingsLayout>
  )
}

export default TwitterInterests

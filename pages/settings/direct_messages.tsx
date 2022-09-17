import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import Checkbox from '../../components/settings/checkbox'

const DirectMessages: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [checkbox, setCheckbox] = useState({
    allow: false,
    filter: false,
    show: false,
  })
  const handleCheckbox = useCallback((e: any) => {
    e.persist
    setCheckbox(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col py-2 items-start justify-start border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 mb-5 flex items-center'>
          <button
            onClick={() => router.back()}
            className={`p-2 rounded-full mr-5 duration-200 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
            Direct Messages
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage who can message you directly.
        </span>
        <Checkbox
          id='allow'
          name='Allow message requests from everyone'
          description="Let people who you don't follow send you message requests and add you to group conversations. To reply to their messages, you need to accept the request."
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkbox.allow}
          handleChecked={handleCheckbox}
        />
        <Checkbox
          id='filter'
          name='Filter low-quality messages'
          description="
            Hide message requests that have been detected as being potentially spam or low-quality. These
            will be sent to a separate inbox at the bottom of your message requests. You can still access them
            if you want."
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkbox.filter}
          handleChecked={handleCheckbox}
        />
        <Checkbox
          id='show'
          name='Show read receipts'
          description="Let people you're messaging with know when you've seen their messages. Read receipts are not shown on message requests."
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkbox.show}
          handleChecked={handleCheckbox}
        />
      </section>
    </SettingsLayout>
  )
}

export default DirectMessages

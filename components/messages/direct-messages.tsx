import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import Checkbox from '../settings/checkbox'

const DirectMessages: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [messagesSettings, setMessagesSettings] = useState({
    request_everyone: false,
    low_quality: true,
    show_receipts: true,
  })
  const handleMessagesSettings = useCallback((e: any) => {
    e.persist()
    setMessagesSettings(prev => ({
      ...prev,
      [e.target.id]: !e.target.checked
    }))
  }, [])
  const router = useRouter()
  return (
    <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
          Direct Messages
        </h1>
      </div>
      <span className={`px-3 mb-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
        Manage who can message you directly.
      </span>
      <Checkbox
        id='request_everyone'
        name='Allow message requests from everyone'
        description="
          Let people who you don't follow send you message requests and add you to group conversations. 
          To reply to their messages, you need to accept the request.
        "
        hasMoreLink={true}
        moreLink='/en/demo-page'
        isChecked={messagesSettings.request_everyone}
        handleChecked={handleMessagesSettings}
      />
      <Checkbox
        id='low_quality'
        name='Filter low-quality messages'
        description="
          Hide message requests that have been detected as being potentially spam or low-quality. These 
          will be sent to a separate inbox at the bottom of your message requests. You can still access them 
          if you want.
        "
        hasMoreLink={true}
        moreLink='/en/demo-page'
        isChecked={messagesSettings.low_quality}
        handleChecked={handleMessagesSettings}
      />
      <Checkbox
        id='show_receipts'
        name='Show read receipts'
        description="
          Let people you're messaging with know when you've seen their messages. Read receipts are not 
          shown on message requests.
        "
        hasMoreLink={true}
        moreLink='/en/demo-page'
        isChecked={messagesSettings.show_receipts}
        handleChecked={handleMessagesSettings}
      />
    </section>
  )
}

export default DirectMessages

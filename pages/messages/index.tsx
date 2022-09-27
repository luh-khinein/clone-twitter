import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import DialogBox from '../../components/messages/dialog-box'
import Navigations from '../../components/messages/navigations'
import TabBar from '../../components/tab-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const Messages: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const [messageState, setMessageState] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath !== '/messages' &&
      router.asPath !== '/compose/tweet' &&
      router.asPath !== '/i/newsletters' &&
      router.asPath !== '/i/flow/convert_to_professional' &&
      router.asPath !== '/i/display' &&
      router.asPath !== '/i/keyboard_shortcuts' &&
      !messageState
    ) {
      router.push('/messages')
    }
  }, [router, messageState])

  return (
    <div className='flex min-w-full min-h-full justify-center' style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <TabBar />
      <main className='flex min-w-min min-h-screen'>
        <Navigations messageState={messageState} setMessageState={setMessageState} />
        <DialogBox setMessageState={setMessageState} />
      </main>
    </div>
  )
}

export default Messages

import type { NextPage } from 'next'
import React, { useCallback, useContext, useState } from 'react'
import TabBar from '../../components/tab-bar'
import Navigations from '../../components/messages/navigations'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import DirectMessages from '../../components/messages/direct-messages'
import ComposeNewMessage from './compose-new-message'

const MessagesSettings: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const [messageModal, setMessageModal] = useState(false)
  const handleMessageModal = useCallback(() => {
    setMessageModal(true)
  }, [])
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
        <Navigations handleNewMessageModal={handleMessageModal} />
        <DirectMessages />
      </main>
      <ComposeNewMessage
        isActive={messageModal}
        setIsActive={setMessageModal}
      />
    </div>
  )
}

export default MessagesSettings

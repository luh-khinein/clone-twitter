import type { NextPage } from 'next'
import React, { useCallback, useContext, useState } from 'react'
import DialogBox from '../../components/messages/dialog-box'
import Navigations from '../../components/messages/navigations'
import TabBar from '../../components/tab-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import ComposeNewMessage from './compose-new-message'

const Messages: NextPage = () => {
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
        <DialogBox
          handleMessageModal={handleMessageModal}
        />
      </main>
      <ComposeNewMessage
        isActive={messageModal}
        setIsActive={setMessageModal}
      />
    </div>
  )
}

export default Messages

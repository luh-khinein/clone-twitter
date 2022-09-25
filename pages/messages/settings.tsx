import type { NextPage } from 'next'
import React, { useContext } from 'react'
import TabBar from '../../components/tab-bar'
import Navigations from '../../components/messages/navigations'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import DirectMessages from '../../components/messages/direct-messages'

const MessagesSettings: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
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
        <Navigations />
        <DirectMessages />
      </main>
    </div>
  )
}

export default MessagesSettings

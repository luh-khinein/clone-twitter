import type { NextPage } from 'next'
import React, { useContext } from 'react'
import DialogBox from '../../components/messages/dialog-box'
import Navigations from '../../components/messages/navigations'
import TabBar from '../../components/tab-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const Messages: NextPage = () => {
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
        <DialogBox />
      </main>
    </div>
  )
}

export default Messages

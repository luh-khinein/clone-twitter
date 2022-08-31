import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import TabBar from '../tab-bar'

const Layout = ({ children }: any) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='flex min-w-max min-h-max justify-center' style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000000'
    }}>
      <TabBar />
      {children}
    </div>
  )
}

export default Layout

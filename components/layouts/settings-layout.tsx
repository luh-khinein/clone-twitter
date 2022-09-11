import React, { useContext } from 'react'
import { lightTheme, darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import TabBar from '../tab-bar'

interface Props {
  children: any
}

const SettingsLayout: React.FC<Props> = ({ children }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='flex min-w-full min-h-full justify-center' style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <TabBar />
      <main className='flex min-w-max justify-between items-start'>
        {children}
      </main>
    </div>
  )
}

export default SettingsLayout

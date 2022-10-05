import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import MomentsTabBar from '../moments/moments-tab-bar'

interface Props {
  children: any
  buttonIsActive: boolean
}

const MomentsLayout: React.FC<Props> = ({ children, buttonIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='flex min-w-full min-h-full justify-center' style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <MomentsTabBar newMomentIsActive={buttonIsActive} />
      <main className='flex min-w-max justify-between items-start'>
        {children}
      </main>
    </div>
  )
}

export default MomentsLayout

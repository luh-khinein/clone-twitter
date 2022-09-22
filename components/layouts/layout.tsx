import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import TabBar from '../tab-bar'
import SideBarColumn from '../sidebar-column'

interface Props {
  children: any
  searchBar: boolean
  searchSetting?: boolean
  hCard: boolean
  fCard: boolean
  stickyPosition: number
}

const Layout: React.FC<Props> = ({ children, searchBar, searchSetting, hCard, fCard, stickyPosition }) => {
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
      <main id='main' className='flex min-w-max justify-between items-start'>
        {children}
        <SideBarColumn searchBar={searchBar} searchSetting={searchSetting} hCard={hCard} fCard={fCard} stickyPosition={stickyPosition} />
      </main>
    </div>
  )
}

export default Layout

import React, { useContext } from 'react'
import { lightTheme, darkTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'
import { FCard, HCard } from './sidebar/cards'
import SearchBar from './search-bar'
import SidebarFooter from './sidebar/sidebar-footer'

interface Props {
  searchBar: boolean
  hCard: boolean // What's happening card
  fCard: boolean // Who to follow
}

const SideBarColumn: React.FC<Props> = ({ searchBar, hCard, fCard }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='xl:min-w-[400px] xl:max-w-[400px] lg:min-w-[340px] lg:max-w-[340px] lg:flex hidden flex-col items-center px-5'>
      {searchBar &&
        <div className='xl:min-w-[400px] xl:max-w-[400px] lg:min-w-[340px] lg:max-w-[340px] lg:flex hidden items-center px-5 py-2 fixed z-10' style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}>
          <SearchBar />
        </div>
      }
      <div style={{ marginTop: searchBar ? '3.5rem' : '.5rem' }}>
        {hCard && <HCard />}
        {fCard && <FCard />}
        <SidebarFooter />
      </div>
    </div>
  )
}

export default SideBarColumn

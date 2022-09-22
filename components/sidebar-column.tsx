import React, { useContext } from 'react'
import { lightTheme, darkTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'
import { FCard, HCard } from './sidebar/cards'
import SearchBar from './search-bar'
import SidebarFooter from './sidebar/sidebar-footer'
import { SizeContext } from '../utils/size-observer'
import SearchFilter from './sidebar/search-filter'

interface Props {
  searchBar: boolean
  searchSetting?: boolean
  hCard: boolean // What's happening card
  fCard: boolean // Who to follow card
  stickyPosition: number
}

const SideBarColumn: React.FC<Props> = ({ searchBar, searchSetting, hCard, fCard, stickyPosition }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { innerHeight } = useContext(SizeContext)
  const stickyMaxPosition = innerHeight > 705
    ? stickyPosition
    : innerHeight > 615
      ? stickyPosition * 1.02
      : stickyPosition * 1.3
  return (
    <section className='xl:min-w-[400px] xl:max-w-[400px] lg:min-w-[340px] lg:max-w-[340px] h-full relative lg:flex hidden flex-col items-center px-5 pb-24'>
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
      <div className='block sticky' style={{
        marginTop: searchBar ? '3.5rem' : '.5rem',
        top: `-${stickyMaxPosition}px`
      }}>
        {searchSetting && <SearchFilter />}
        {hCard && <HCard />}
        {fCard && <FCard />}
        <SidebarFooter />
      </div>
    </section>
  )
}

export default SideBarColumn

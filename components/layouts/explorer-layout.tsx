import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'
import { lightTheme, darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import SearchBar from '../search-bar'
import TabListButton from '../tab-list-button'
import Explore from '../../pages/settings/explore'

interface Props {
  children: any
}

const ExplorerLayout: React.FC<Props> = ({ children }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path[path.length - 1])
  }, [])

  useEffect(() => {
    if (currentPage !== router.asPath) {
      handlePage()
    }
  }, [router])

  return (
    <section className={`w-timeline min-h-full border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className={`fixed top-0 z-10 w-[598px] flex flex-col border-b items-center py-3 backdrop-blur-sm ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
        background: backgroundTheme === 'light'
          ? 'rgba(255, 255, 255, 0.85)'
          : backgroundTheme === 'dark'
            ? 'rgba(21, 32, 43, 0.85)'
            : 'rgba(0, 0, 0, 0.85)'
      }}>
        <div className='w-full flex justify-between items-center px-5'>
          <div className='min-w-[502px]'>
            <SearchBar />
          </div>
          <Link href={`${router.asPath}?explore=true`} as='/settings/explore'>
            <a className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}>
              <IoSettingsOutline className='w-5 h-5' />
            </a>
          </Link>
        </div>
        <nav className='flex justify-between w-full items-center'>
          <TabListButton
            link='/explorer/tabs/for-you'
            linkName='for-you'
            extraLinkName='explorer'
            name='For you'
            currentPage={currentPage}
          />
          <TabListButton
            link='/explorer/tabs/trending'
            linkName='trending'
            name='Trending'
            currentPage={currentPage}
          />
          <TabListButton
            link='/explorer/tabs/news'
            linkName='news'
            name='News'
            currentPage={currentPage}
          />
          <TabListButton
            link='/explorer/tabs/sports'
            linkName='sports'
            name='Sports'
            currentPage={currentPage}
          />
          <TabListButton
            link='/explorer/tabs/entertainment'
            linkName='entertainment'
            name='Entertainment'
            currentPage={currentPage}
          />
        </nav>
      </div>
      {children}
      <Explore />
    </section >
  )
}

export default ExplorerLayout

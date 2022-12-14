import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { useRouter } from 'next/router'
import { IoSettingsOutline } from 'react-icons/io5'
import TabListButton from '../tab-list-button'
import { FontSizeContext } from '../../utils/font-size'

interface Props {
  children: any
}

const NotificationsLayout: React.FC<Props> = ({ children }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path[path.length - 1])
  }, [])

  useEffect(() => {
    const path = router.asPath.split('/')
    if (currentPage !== path[path.length - 1]) {
      handlePage()
    }
  }, [currentPage, router, handlePage])

  return (
    <section className={`w-timeline min-h-full border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className={`fixed top-0 z-10 w-[598px]  flex flex-col border-b items-center py-3 backdrop-blur-sm ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
        background: backgroundTheme === 'light'
          ? 'rgba(255, 255, 255, .85)'
          : backgroundTheme === 'dark'
            ? 'rgba(21, 32, 43, .85)'
            : 'rgba(0, 0, 0, .85)'
      }}>
        <div className='w-full flex justify-between items-center px-5'>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            Notifications
          </h1>
          <Link href='/settings/notifications'>
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
        <nav className='w-full flex justify-between'>
          <TabListButton
            link='/notifications'
            linkName='notifications'
            name='All'
            currentPage={currentPage}
          />
          <TabListButton
            link='/notifications/mentions'
            linkName='mentions'
            name='Mentions'
            currentPage={currentPage}
          />
        </nav>
      </div>
      {children}
    </section>
  )
}

export default NotificationsLayout

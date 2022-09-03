import React, { useState, useEffect, useCallback, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsTwitter } from 'react-icons/bs'
import {
  RiHome7Line, RiHome7Fill,
  RiSearch2Line, RiSearch2Fill,
  RiNotification2Line, RiNotification2Fill,
  RiMailLine, RiMailFill,
  RiBookmarkLine, RiBookmarkFill,
  RiFileList2Fill, RiFileList2Line,
  RiUser3Line, RiUser3Fill,
} from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'
import { colors, darkTheme, lightTheme } from '../libs/colors'
import TabButton from './tab-button'
import MoreButton from './more-button'
import TweetButton from './tweet-button'
import ProfileButton from './profile-button'

const TabBar: React.FC = () => {
  const { backgroundTheme, handleBackground } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState([''])
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path)
  }, [])

  useEffect(() => {
    if (currentPage.join('/') !== router.asPath) {
      handlePage()
    }
  }, [router])

  return (
    <section className='mr-[70px] 2xl:mr-[300px] flex z-30'>
      <nav className='mr-10 min-w-max flex flex-col items-center justify-between 2xl:items-start 2xl:left-5 min-h-screen fixed' style={{
        color: backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon,
      }}>
        <div className='flex flex-col w-full min-h-min'>
          <Link href='/home'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'dark'
                ? darkTheme.background
                : backgroundTheme === 'black'
                  ? '#000'
                  : ''
            }}>
              <BsTwitter className='w-icon h-icon' style={{
                color: backgroundTheme === 'light' ? colors.default : darkTheme.icon
              }} />
            </a>
          </Link>
          <TabButton
            link='/home'
            linkName='home'
            name='Home'
            condition={true}
            activedIcon={<RiHome7Fill className='w-icon h-icon' />}
            desativedIcon={<RiHome7Line className='w-icon h-icon' />}
            currentPage={currentPage[1]}
          />
          <TabButton
            link='/explorer'
            linkName='explorer'
            name='Explore'
            condition={true}
            activedIcon={<RiSearch2Fill className='w-icon h-icon' />}
            desativedIcon={<RiSearch2Line className='w-icon h-icon' />}
            currentPage={currentPage[1]}
          />
          <TabButton
            link='/notifications'
            linkName='notifications'
            name='Notifications'
            condition={true}
            activedIcon={<RiNotification2Fill className='w-icon h-icon' />}
            desativedIcon={<RiNotification2Line className='w-icon h-icon' />}
            currentPage={currentPage[1]}
          />
          <TabButton
            link='/messages'
            linkName='messages'
            name='Messages'
            condition={true}
            activedIcon={<RiMailFill className='w-icon h-icon' />}
            desativedIcon={<RiMailLine className='w-icon h-icon' />}
            currentPage={currentPage[1]}
          />
          <div className='hidden short:flex'>
            <TabButton
              link='/i/bookmarks'
              linkName='bookmarks'
              name='Bookmarks'
              condition={true}
              activedIcon={<RiBookmarkFill className='w-icon h-icon' />}
              desativedIcon={<RiBookmarkLine className='w-icon h-icon' />}
              currentPage={currentPage[2]}
            />
          </div>
          <div className='hidden short:flex'>
            <TabButton
              link='/username/lists'
              linkName='lists'
              name='Lists'
              condition={true}
              activedIcon={<RiFileList2Fill className='w-icon h-icon' />}
              desativedIcon={<RiFileList2Line className='w-icon h-icon' />}
              currentPage={currentPage[2]}
            />
          </div>
          <TabButton
            link='/username'
            linkName='username'
            name='Profile'
            condition={currentPage[2] !== 'lists' && currentPage[2] !== 'topics'}
            activedIcon={<RiUser3Fill className='w-icon h-icon' />}
            desativedIcon={<RiUser3Line className='w-icon h-icon' />}
            currentPage={currentPage[1]}
          />
          <MoreButton />
          <TweetButton />
        </div>
        <div className='mb-5'>
          <ProfileButton />
          <button className='border' onClick={handleBackground}>
            toggle
          </button>
        </div>
      </nav>
    </section>
  )
}

export default TabBar

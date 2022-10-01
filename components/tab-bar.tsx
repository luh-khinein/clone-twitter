import React, { useState, useEffect, useCallback, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsTwitter } from 'react-icons/bs'
import { ThemeContext } from '../utils/theme'
import { colors, darkTheme, lightTheme } from '../libs/colors'
import TabButton from './tab-button'
import MoreButton from './more-button'
import TweetButton from './tweet-button'
import ProfileButton from './profile-button'
import NewsLetters from '../pages/i/newsletters'
import ConvertToProfessional from '../pages/i/flow/convert_to_professional'
import KeyboardShortcuts from '../pages/i/keyboard_shortcuts'
import Display from '../pages/i/display'
import { HomeIconActived, HomeIconDisabled } from './icons/home-icon'
import { ExploreIconActived, ExploreIconDisabled } from './icons/explore-icon'
import { NotificationIconActived, NotificationIconDisabled } from './icons/notification-icon'
import { MailIconActived, MailIconDisabled } from './icons/mail-icon'
import { BookmarkIconActived, BookmarkIconDisabled } from './icons/bookmark-icon'
import { ListIconActived, ListIconDisabled } from './icons/list-icon'
import { UserIconActived, UserIconDisabled } from './icons/user-icon'

const TabBar: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const currentColor = backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon
  const [currentPage, setCurrentPage] = useState([''])
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path)
  }, [])
  const [modalState, setModalState] = useState({
    news: false,
    professional: false,
    display: false,
    keyboard: false
  })
  const handleModalState = useCallback((e: any) => {
    e.persist()
    setModalState(prev => ({
      ...prev,
      [e.target.id]: true
    }))
  }, [])

  useEffect(() => {
    if (currentPage.join('/') !== router.asPath) {
      handlePage()
    }
  }, [currentPage, router, handlePage])

  return (
    <section className='mr-[70px] ml-6 2xl:mr-[200px] 2xl:ml-[100px] flex z-30'>
      <nav className='mr-10 2xl:ml-10 min-w-max flex flex-col items-center justify-between 2xl:items-start 2xl:left-5 min-h-screen fixed' style={{
        color: backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon,
      }}>
        <div className='flex flex-col w-full min-h-min justify-center items-start'>
          <Link href='/home'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : backgroundTheme === 'black' ? 'hover:bg-zinc-900' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'dark'
                ? darkTheme.background
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
            activedIcon={<HomeIconActived color={currentColor} />}
            desativedIcon={<HomeIconDisabled color={currentColor} />}
            currentPage={currentPage[1]}
          />
          <TabButton
            link='/explorer'
            linkName='explorer'
            name='Explore'
            condition={true}
            activedIcon={<ExploreIconActived color={currentColor} />}
            desativedIcon={<ExploreIconDisabled color={currentColor} />}
            currentPage={currentPage[1]}
          />
          <TabButton
            link='/notifications'
            linkName='notifications'
            name='Notifications'
            condition={true}
            activedIcon={<NotificationIconActived color={currentColor} />}
            desativedIcon={<NotificationIconDisabled color={currentColor} />}
            currentPage={currentPage[1]}
          />
          <TabButton
            link='/messages'
            linkName='messages'
            name='Messages'
            condition={true}
            activedIcon={<MailIconActived color={currentColor} width={26.25} height={26.25} />}
            desativedIcon={<MailIconDisabled color={currentColor} width={26.25} height={26.25} />}
            currentPage={currentPage[1]}
          />
          <div className='hidden short:flex'>
            <TabButton
              link='/i/bookmarks'
              linkName='bookmarks'
              name='Bookmarks'
              condition={true}
              activedIcon={<BookmarkIconActived color={currentColor} width={26.25} height={26.25} />}
              desativedIcon={<BookmarkIconDisabled color={currentColor} width={26.25} height={26.25} />}
              currentPage={currentPage[2]}
            />
          </div>
          <div className='hidden short:flex'>
            <TabButton
              link='/username/lists'
              linkName='lists'
              name='Lists'
              condition={true}
              activedIcon={<ListIconActived color={currentColor} width={26.25} height={26.25} />}
              desativedIcon={<ListIconDisabled color={currentColor} width={26.25} height={26.25} />}
              currentPage={currentPage[2]}
            />
          </div>
          <TabButton
            link='/username'
            linkName='username'
            name='Profile'
            condition={currentPage[2] !== 'lists' && currentPage[2] !== 'topics'}
            activedIcon={<UserIconActived color={currentColor} />}
            desativedIcon={<UserIconDisabled color={currentColor} />}
            currentPage={currentPage[1]}
          />
          <MoreButton handleModals={handleModalState} />
          <TweetButton />
        </div>
        <div className='mb-5'>
          <ProfileButton />
        </div>
      </nav>
      <NewsLetters
        isActive={modalState.news}
        setIsActive={setModalState}
      />
      <ConvertToProfessional
        isActive={modalState.professional}
        setIsActive={setModalState}
      />
      <Display
        isActive={modalState.display}
        setIsActive={setModalState}
      />
      <KeyboardShortcuts
        isActive={modalState.keyboard}
        setIsActive={setModalState}
      />
    </section>
  )
}

export default TabBar

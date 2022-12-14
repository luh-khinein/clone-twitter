import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { colors, darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { BsTwitter } from 'react-icons/bs'
import TabButton from '../tab-button'
import MomentsCreateButton from './moments-create-button'
import ProfileButton from '../profile-button'
import { HomeIconActived, HomeIconDisabled } from '../icons/home-icon'
import { MomentIconActived, MomentIconDisabled } from '../icons/moment-icon'

interface Props {
  newMomentIsActive: boolean
}

const MomentsTabBar: React.FC<Props> = ({ newMomentIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const currentColor = backgroundTheme === 'light'
    ? lightTheme.icon
    : darkTheme.icon
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
  }, [currentPage, router, handlePage])

  return (
    <section className='mr-[70px] 2xl:mr-[300px] flex z-30'>
      <nav className='mr-10 min-w-max flex flex-col items-center justify-between 2xl:items-start 2xl:left-5 min-h-screen fixed' style={{
        color: backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon
      }}>
        <div className='flex flex-col w-full min-h-min'>
          <Link href='/home'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : backgroundTheme === 'black' ? 'hover:bg-zinc-900' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
            }}>
              <BsTwitter
                className='w-icon h-icon'
                style={{ color: backgroundTheme === 'light' ? colors.default : darkTheme.icon }}
              />
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
            link='/i/moment_maker'
            linkName='moment_maker'
            name='Moment'
            condition={true}
            activedIcon={<MomentIconActived color={currentColor} width={26.25} height={26.25} />}
            desativedIcon={<MomentIconDisabled color={currentColor} width={26.25} height={26.25} />}
            currentPage={currentPage[2]}
          />
          <MomentsCreateButton isActive={newMomentIsActive} />
        </div>
        <div className='mb-5'>
          <ProfileButton />
        </div>
      </nav>
    </section>
  )
}

export default MomentsTabBar

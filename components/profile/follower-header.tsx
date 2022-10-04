import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import TabListButton from '../tab-list-button'

interface HeaderValue {
  nickname: string
  username: string
}

const FollowingHeader: React.FC<HeaderValue> = ({ nickname, username }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
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
  }, [currentPage, router, handlePage])

  return (
    <div className={`fixed top-0 z-10 w-[598px]  flex flex-col border-b backdrop-blur-sm ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      background: backgroundTheme === 'light'
        ? 'rgba(255, 255, 255, .85)'
        : backgroundTheme === 'dark'
          ? 'rgba(21, 32, 43, .85)'
          : 'rgba(0, 0, 0, .85)'
    }}>
      <div className='flex items-center px-3 py-2'>
        <button
          onClick={() => router.push(`/${username}`)}
          className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
          style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}
        >
          <BsArrowLeft className='w-5 h-5' />
        </button>
        <div className='flex flex-col items-start leading-5'>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            {nickname}
          </h1>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
            @{username}
          </span>
        </div>
      </div>
      <nav className='w-full flex justify-between'>
        <TabListButton
          link={`/${username}/followers`}
          linkName='followers'
          name='Followers'
          currentPage={currentPage}
        />
        <TabListButton
          link={`/${username}/following`}
          linkName='following'
          name='Following'
          currentPage={currentPage}
        />
      </nav>
    </div>
  )
}

export default FollowingHeader

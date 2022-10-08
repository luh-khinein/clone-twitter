import React, { useCallback, useContext, useRef, useState } from 'react'
import { RiMoreLine, RiUser3Fill } from 'react-icons/ri'
import { darkTheme, lightTheme } from '../libs/colors'
import { FontSizeContext } from '../utils/font-size'
import { ThemeContext } from '../utils/theme'
import ProfilePopupMenu from './profile-popup-menu'

const ProfileButton: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize } = useContext(FontSizeContext)
  const refProfileButton = useRef<HTMLButtonElement>(null)
  const [popupActived, setPopupActived] = useState(false)
  const handlePopup = useCallback(() => {
    setPopupActived(!popupActived)
  }, [popupActived])
  const [showName, setShowName] = useState(false)
  const handleShowName = useCallback(() => {
    setShowName(true)
  }, [])
  const handleHiddeName = useCallback(() => {
    setShowName(false)
  }, [])
  // fix that later
  const username = 'username'
  const nickname = 'nickname'
  return (
    <div className='flex flex-col items-center'>
      <button
        ref={refProfileButton}
        className={`cursor-pointer flex items-center justify-center w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:py-2 2xl:px-3 rounded-full mt-7 ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'hover:bg-zinc-900 active:bg-zinc-800' : 'hover:brightness-110 active:brightness-125'} duration-200`}
        style={{
          backgroundColor: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}
        onClick={handlePopup}
        onMouseEnter={handleShowName}
        onMouseLeave={handleHiddeName}
      >
        <div className='flex items-center justify-center p-3 rounded-full bg-slate-300 text-slate-500'>
          <RiUser3Fill className='w-icon h-icon' />
        </div>
        <div className='hidden 2xl:flex w-full justify-between items-center ml-2'>
          <div className='flex flex-col items-start'>
            <span style={{ fontSize: `${baseSize}px` }}>
              {nickname}
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
              @{username}
            </span>
          </div>
          <RiMoreLine className={`w-icon h-icon ml-10 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} />
        </div>
      </button>
      <div className={`absolute inline-block 2xl:hidden pointer-events-none z-20 bg-black text-white p-1 rounded-md ${showName ? 'opacity-70' : 'opacity-0'} transition-opacity`} style={{
        fontSize: `${exSmSize}px`
      }}>
        Accouts
      </div>
      {popupActived && (
        <div className='fixed top-0 left-0 w-full h-full z-10' onClick={handlePopup}>
          <ProfilePopupMenu
            profileButton={refProfileButton}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileButton

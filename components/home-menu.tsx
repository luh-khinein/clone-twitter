import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import { createPortal } from 'react-dom'
import ClockIcon from '../libs/clock-icon'
import { FontSizeContext } from '../utils/font-size'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import SparkleIcon from '../libs/sparkle-icon'

interface Props {
  menuButton: React.RefObject<HTMLButtonElement>
}

const HomeMenu: React.FC<Props> = ({ menuButton }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [homeMenuState, setHomeMenuState] = useState(true)
  const handleHomeMenuState = useCallback(() => {
    setHomeMenuState(!homeMenuState)
  }, [homeMenuState])
  return createPortal(
    <div className={`fixed z-30 min-w-[380px] max-w-[380px] h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      left: `${menuButton.current!.getBoundingClientRect().x - 320}px`,
      top: `${menuButton.current!.getBoundingClientRect().y}px`
    }}>
      <div className={`w-full flex flex-col items-center justify-center px-5 py-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        {homeMenuState ? (
          <SparkleIcon />
        ) : (
          <ClockIcon />
        )}
        <span className='text-center font-bold leading-5 mt-3' style={{ fontSize: `${xlSize}px` }}>
          {homeMenuState ? (
            <span>
              Home shows you up Tweets first
            </span>
          ) : (
            <span>
              Latest Tweets show up as they happen
            </span>
          )}
        </span>
      </div>
      <Link href='/home'>
        <a onClick={handleHomeMenuState} className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <HiOutlineSwitchHorizontal className='w-5 h-5' />
            </div>
            <div className={`flex flex-col justify-start ml-5`}>
              {homeMenuState ? (
                <>
                  <span style={{ fontSize: `${baseSize}px` }}>
                    See latest Tweets instead
                  </span>
                  <span className={`${backgroundTheme === 'black' ? 'text-zinc-800' : 'text-slate-800'}`} style={{ fontSize: `${exSmSize}px` }}>
                    You&#39;ll see top Tweets show up as they happen.
                  </span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: `${baseSize}px` }}>
                    Go back Home
                  </span>
                  <span className={`${backgroundTheme === 'black' ? 'text-zinc-800' : 'text-slate-800'}`} style={{ fontSize: `${exSmSize}px` }}>
                    You#39;ll see top Tweets first.
                  </span>
                </>
              )}
            </div>
          </div>
        </a>
      </Link>
      <Link href='/settings/content_preferences'>
        <a className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <IoSettingsOutline className='w-5 h-5' />
            </div>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                View content preferences
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>,
    document.querySelector("#__next")!
  )
}

export default HomeMenu

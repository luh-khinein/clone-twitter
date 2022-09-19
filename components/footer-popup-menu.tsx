import React, { useContext } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { darkTheme, lightTheme } from '../libs/colors'
import { FontSizeContext } from '../utils/font-size'
import { ThemeContext } from '../utils/theme'

const FooterPopupMenu: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return createPortal(
    <div className={`fixed z-30 bottom-20 right-10 max-w-max h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
    }}>
      <Link href='https://about.twitter.com/pt'>
        <a target='_blank' className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                About
              </span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='/en/demo-page'>
        <a target='_blank' className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Status
              </span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='/en/demo-page'>
        <a target='_blank' className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Twitter for Business
              </span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='/en/demo-page'>
        <a target='_blank' className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Developers
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>,
    document.querySelector("#__next")!
  )
}

export default FooterPopupMenu

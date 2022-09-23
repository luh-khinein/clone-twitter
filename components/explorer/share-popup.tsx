import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { BsLink45Deg } from 'react-icons/bs'
import { RiQuillPenFill } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { useRouter } from 'next/router'

const SharePopup: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <div className={`fixed z-30 top-5 left-[50%] w-max h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
    }}>
      <Link href={`${router.asPath}&search=true`} as='/settings/search'>
        <a className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <RiQuillPenFill className='w-5 h-5' />
            </div>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Tweet this
              </span>
            </div>
          </div>
        </a>
      </Link>
      <Link href={`${router.asPath}&search_advanced=true`} as='/search_advanced'>
        <a className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <AiOutlineMail className='w-5 h-5' />
            </div>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Send via Direct Message
              </span>
            </div>
          </div>
        </a>
      </Link>
      <button className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
      }}>
        <div className='flex items-center'>
          <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <BsLink45Deg className='w-5 h-5' />
          </div>
          <div className={`flex flex-col justify-start ml-5`}>
            <span style={{ fontSize: `${baseSize}px` }}>
              Copy link
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default SharePopup 

import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'
import { RiUser3Fill } from 'react-icons/ri'
import { TiArrowSortedDown } from 'react-icons/ti'

const ProfilePopupMenu: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  // fix this later
  const nickname = 'nickname'
  const username = 'username'

  return (
    <div className={`top-[55%] fixed flex flex-col min-w-[300px] min-h-max rounded-3xl py-5 m-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <ul className='flex flex-col w-full min-h-max'>
        <li className='w-full'>
          <div className={`flex items-center py-3 px-4 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <div className={`flex items-center justify-center p-2 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <button className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 text-slate-500'>
                <RiUser3Fill className='w-[27px] h-[27px]' />
              </button>
            </div>
            <div className='flex flex-col'>
              <span>
                {nickname}
              </span>
              <span className='text-slate-400'>
                @{username}
              </span>
            </div>
          </div>
        </li>
        <li className='w-full'>
          <Link href=''>
            <a className={`w-full flex py-3 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              Add an existing account
            </a>
          </Link>
        </li>
        <li className='w-full'>
          <button className={`w-full flex py-3 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            Log out @{username}
          </button>
        </li>
      </ul>
      <TiArrowSortedDown
        className={`absolute mt-[185px] ml-[18px] w-8 h-8 ${backgroundTheme === 'light' ? 'fill-[drop-shadow-xl]' : 'fill-[drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]]'}`}
        style={{
          color: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}
      />
    </div>
  )
}

export default ProfilePopupMenu

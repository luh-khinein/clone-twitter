import React, { Dispatch, SetStateAction, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'
import { RiUser3Fill } from 'react-icons/ri'
import { FontSizeContext } from '../utils/font-size'

interface UserValue {
  setIsActive: Dispatch<SetStateAction<boolean>>
  user_component: React.RefObject<HTMLAnchorElement>
  icon: string
  username: string
  nickname: string
  bio: string
  followers: number
  following: number
}

const UserPopup: React.FC<UserValue> = ({ setIsActive, user_component, icon, username, nickname, bio, followers, following }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, smSize, baseSize } = useContext(FontSizeContext)
  return (
    <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className={`absolute z-30 min-w-[325px] ml-5 p-3 transition-opacity ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      left: `${user_component.current!.getBoundingClientRect().x}px`,
      top: `${user_component.current!.getBoundingClientRect().y - 140}px`
    }}>
      <div className='flex items-center justify-between'>
        {icon === '' ? (
          <Link href={`/${username}`}>
            <a className='duration-200 hover:brightness-95'>
              <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300'>
                <RiUser3Fill className='w-8 h-8' />
              </div>
            </a>
          </Link>
        ) : (
          <Link href={`/${username}`}>
            <a className='duration-200 rounded-full hover:brightness-95'>
              <Image
                src={icon}
                alt={username}
                width={50}
                height={50}
                className='rounded-full'
              />
            </a>
          </Link>
        )}
        <button
          className={`px-4 py-2 flex items-center justify-center font-bold rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-125' : 'hover:brightness-95'}`}
          style={{
            background: backgroundTheme === 'light'
              ? '#000'
              : '#fff',
            color: backgroundTheme === 'light'
              ? '#fff'
              : '#000',
            fontSize: `${baseSize}px`
          }}
        >
          Follow
        </button>
      </div>
      <Link href={`/${username}`}>
        <a className='flex flex-col leading-5 my-2'>
          <span className='font-bold hover:underline' style={{ fontSize: `${baseSize}px` }}>
            {nickname}
          </span>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
            @{username}
          </span>
        </a>
      </Link>
      <p className='leading-5 my-1'>
        {bio}
      </p>
      <div className='flex items-center' style={{ fontSize: `${smSize}px` }}>
        <Link href={`/${username}/following`}>
          <a className='flex items-end mr-5 hover:underline'>
            {following}
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              &nbsp;Following
            </span>
          </a>
        </Link>
        <Link href={`/${username}/followers`}>
          <a className='flex items-end hover:underline'>
            {followers}
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              &nbsp;Followers
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default UserPopup

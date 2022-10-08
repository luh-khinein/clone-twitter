import React, { useContext, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { SizeContext } from '../../utils/size-observer'
import { FontSizeContext } from '../../utils/font-size'
import UserPopup from '../user-popup'

interface Props {
  image: string
  username: string
  nickname: string
}

const WhoToFollow: React.FC<Props> = ({ image, username, nickname }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize } = useContext(FontSizeContext)
  const { innerWidth } = useContext(SizeContext)
  const refUserButton = useRef<HTMLAnchorElement>(null)
  const [userPopup, setUserPopup] = useState(false)

  const user = username.length > 18
    ? innerWidth < 1110
      ? username.slice(0, 12).padEnd(15, '.')
      : username.slice(0, 17).padEnd(20, '.')
    : username
  const nick = nickname.length > 18
    ? innerWidth < 1024
      ? nickname.slice(0, 12).padEnd(15, '.')
      : nickname.slice(0, 15).padEnd(18, '.')
    : nickname

  return (
    <>
      <Link href={`/${username}`}>
        <a ref={refUserButton} onMouseEnter={() => setUserPopup(true)} onMouseLeave={() => setUserPopup(false)} className={`flex relative items-center justify-between min-w-full py-3 px-5 ${backgroundTheme === 'light' ? 'bg-neutral-50 hover:brightness-95' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
        }}>
          <div className='flex mr-1'>
            <div className='max-w-[48px] max-h-[48px] min-h-[48px] min-w-[48px] mr-3'>
              <Image
                src={image}
                alt={username}
                width={400}
                height={400}
                className='rounded-full'
              />
            </div>
            <div className='flex flex-col' style={{
              fontSize: `${smSize}px`
            }}>
              <span className='font-bold hover:underline'>
                {nick}
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                @{user}
              </span>
            </div>
          </div>
          <button className={`rounded-3xl py-1 px-4 flex items-center justify-center font-bold ${backgroundTheme === 'light' ? 'bg-black hover:bg-gray-800' : 'bg-white hover:brightness-90'} duration-200`} style={{
            color: backgroundTheme === 'light'
              ? '#fff'
              : '#000'
          }}>
            Follow
          </button>
        </a>
      </Link>
      <div className='fixed top-0 left-0 duration-200 z-30' style={{
        opacity: userPopup ? 1 : 0
      }}>
        {userPopup && (
          <UserPopup
            user_component={refUserButton}
            setIsActive={setUserPopup}
            icon={image}
            username={username}
            nickname={nickname}
            bio=''
            followers={0}
            following={0}
          />
        )}
      </div>
    </>
  )
}

export default WhoToFollow

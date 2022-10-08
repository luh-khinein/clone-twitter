import React, { useContext, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import UserPopup from '../user-popup'

interface Props {
  image: string
  username: string
  nickname: string
  description: string
}

const WhoToFollowCard: React.FC<Props> = ({ image, username, nickname, description }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const refUserButton = useRef<HTMLAnchorElement>(null)
  const [userPopup, setUserPopup] = useState(false)
  return (
    <>
      <Link href={`/${username}`}>
        <a onMouseEnter={() => setUserPopup(true)} onMouseLeave={() => setUserPopup(false)} ref={refUserButton} className={`flex items-center justify-between min-w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:bg-gray-100' : backgroundTheme === 'black' ? 'hover:bg-zinc-900' : 'hover:bg-slate-800'} duration-200`}>
          <div className='flex mr-1' style={{
            fontSize: `${smSize}px`
          }}>
            <div className='max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] mr-3'>
              <Image
                src={image}
                alt={username}
                width={400}
                height={400}
                className='rounded-full'
              />
            </div>
            <div className='flex flex-col'>
              <span className='font-bold hover:underline'>
                {nickname}
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                @{username}
              </span>
              <span>
                {description}
              </span>
            </div>
          </div>
          <button className={`rounded-3xl py-2 px-5 flex items-center justify-center ${backgroundTheme === 'light' ? 'bg-black hover:bg-gray-800' : 'bg-white hover:brightness-90'} duration-200`} style={{
            fontSize: `${baseSize}px`,
            color: backgroundTheme === 'light'
              ? '#fff'
              : '#000'
          }}>
            Follow
          </button>
        </a>
      </Link>
      <div className='fixed top-0 left-0 duration-200 z-20' style={{
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

export default WhoToFollowCard

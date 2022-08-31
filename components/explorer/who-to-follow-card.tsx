import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from '../../utils/theme'

interface Props {
  image: string
  username: string
  nickname: string
  description: string
  link: string
}

const WhoToFollowCard: React.FC<Props> = ({ image, username, nickname, description, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Link href={link}>
      <a className={`flex items-center justify-between min-w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} duration-200`}>
        <div className='flex mr-1'>
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
            <span className='text-sm font-bold hover:underline'>
              {nickname}
            </span>
            <span className='text-sm text-slate-400'>
              {username}
            </span>
            <span className='text-sm'>
              {description}
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
  )
}

export default WhoToFollowCard

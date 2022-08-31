import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'

interface Props {
  link: string
  image: string
  name: string
  creatorImage: string
  nickname: string
  username: string
}

const ListCard: React.FC<Props> = ({ link, image, name, creatorImage, nickname, username }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Link href={link}>
      <a className={`w-full py-3 px-5 flex flex-1 items-center justify-between ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000'
      }}>
        <div className='flex'>
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className='rounded-lg'
          />
          <div className='flex flex-col px-6'>
            <h3 className='font-bold'>
              {name}
            </h3>
            <div className='flex items-center flex-1 text-sm'>
              <Image
                src={creatorImage}
                alt={username}
                width={16}
                height={16}
                className='rounded-full ml-1'
              />
              <span className='font-bold'>
                {nickname}&nbsp;
              </span>
              <span className='text-slate-400'>
                @{username}
              </span>
            </div>
          </div>
        </div>
        <button className={`py-1.5 px-4 flex text-sm items-center justify-center rounded-full font-bold ${backgroundTheme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:brightness-95'} duration-200`}>
          Follow
        </button>
      </a>
    </Link>
  )
}

export default ListCard

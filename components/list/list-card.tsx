import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'

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
  const { smSize, baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className={`w-full py-3 px-5 flex flex-1 items-center justify-between ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
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
            <h3 className='font-bold' style={{
              fontSize: `${baseSize}px`
            }}>
              {name}
            </h3>
            <div className='flex items-center flex-1' style={{
              fontSize: `${smSize}px`
            }}>
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
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                @{username}
              </span>
            </div>
          </div>
        </div>
        <button className={`py-1.5 px-4 flex items-center justify-center rounded-full font-bold ${backgroundTheme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:brightness-95'} duration-200`} style={{
          fontSize: `${smSize}px`
        }}>
          Follow
        </button>
      </a>
    </Link>
  )
}

export default ListCard

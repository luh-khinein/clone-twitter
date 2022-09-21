import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'

interface TrendingProps {
  topic: string
  title: string
  image?: string
  link: string
}

export const Trending: React.FC<TrendingProps> = ({ topic, title, image, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className={`flex relative min-w-full justify-between py-3 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
      }}>
        <div className='flex flex-col'>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
            fontSize: `${smSize}px`
          }}>
            {topic} · Trending
          </span>
          <h2 style={{
            fontSize: `${baseSize}px`,
            color: backgroundTheme === 'light'
              ? lightTheme.text
              : darkTheme.text
          }}>
            {title}
          </h2>
        </div>
        {image && (
          <div className='max-w-[68px] min-w-[68px] min-h-[68px] max-h-[68px] ml-2'>
            <Image
              src={image}
              alt={title}
              width={68}
              height={68}
              className='rounded-lg'
            />
          </div>
        )}
      </a>
    </Link>
  )
}

interface HashProps {
  title: string
  content: string
  link: string
}

export const HashTrending: React.FC<HashProps> = ({ title, content, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className={`flex flex-col relative min-w-full justify-between py-3 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '',
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text
      }}>
        <h2 style={{
          fontSize: `${xlSize}px`,
        }}>
          {title}
        </h2>
        <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
          fontSize: `${baseSize}px`
        }}>
          {content}
        </span>
      </a>
    </Link>
  )
}

interface NoticesProps {
  topic: string
  title: string
  time: string
  image: string
  link: string
}

export const NoticesTrending: React.FC<NoticesProps> = ({ topic, title, time, image, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className={`flex relative min-w-full justify-between py-3 px-4 items-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
      }}>
        <div className='flex flex-col justify-start'>
          <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
            fontSize: `${smSize}px`
          }}>
            {topic} · {time}
          </div>
          <h2 className='tracking-wide' style={{
            fontSize: `${baseSize}px`,
            color: backgroundTheme === 'light'
              ? lightTheme.text
              : darkTheme.text
          }}>
            {title}
          </h2>
        </div>
        <div className='max-h-[68px] min-h-[68px] max-w-[68px] min-w-[68px] ml-2'>
          <Image
            src={image}
            alt={title}
            width={68}
            height={68}
            className='rounded-lg'
          />
        </div>
      </a>
    </Link>
  )
}

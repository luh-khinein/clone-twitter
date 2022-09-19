import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontSizeContext } from '../utils/font-size'
import { ThemeContext } from '../utils/theme'
import { RiMoreLine, RiUser3Fill } from 'react-icons/ri'
import { colors, darkTheme, lightTheme } from '../libs/colors'
import { BiMessage } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { TbUpload } from 'react-icons/tb'

interface TweetBoxValue {
  image: string
  user_link: string
  tweet_link: string
  nickname: string
  username: string
  date: string
  tweet: string
  comments: number
  retweets: number
  likes: number
}

const TweetBox: React.FC<TweetBoxValue> = ({
  image,
  user_link, tweet_link,
  nickname, username, date, tweet,
  comments, retweets, likes
}) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const [hoverMorePopup, setHoverMorePopup] = useState(false)
  const handleHoverMore = useCallback(() => {
    setHoverMorePopup(!hoverMorePopup)
  }, [hoverMorePopup])
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])

  return (
    <Link href={tweet_link}>
      <a className={`flex flex-row mt-4 py-2 px-5 w-full border-b duration-200 ${backgroundTheme === 'light' ? 'border-gray-100 hover:bg-gray-50' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-slate-800 hover:brightness-110'}`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : ''
      }}>
        <div className='flex justify-center text-slate-400'>
          <Link href={user_link}>
            {image === '' ? (
              <a className={`z-10 bg-slate-300 text-slate-500 w-12 h-12 border rounded-full flex justify-center items-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`}>
                <RiUser3Fill className='w-7 h-7' />
              </a>
            ) : (
              <a className={`z-10 w-12 h-12 border rounded-full flex justify-center items-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`}>
                <Image
                  src={image}
                  width={48}
                  height={48}
                  className='rounded-full'
                />
              </a>
            )}
          </Link>
        </div>
        <div className='ml-5 min-h-min flex flex-1 flex-col justify-center' style={{
          color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
        }}>
          <div className='flex items-center min-w-full justify-between'>
            <div className='flex items-center'>
              <span className='font-bold mr-1' style={{ fontSize: `${baseSize}px` }}>
                {nickname}
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
                {username} · {date}
              </span>
            </div>
            <button
              onClick={handleMorePopup}
              onMouseEnter={handleHoverMore}
              onMouseLeave={handleHoverMore}
              className='p-2 flex items-center justify-center rounded-full transition-colors'
              style={{
                background: hoverMorePopup ? colors.defaultHover : '',
                color: hoverMorePopup ? colors.default : '',
              }}
            >
              <RiMoreLine className='w-5 h-5' />
            </button>
          </div>
          <div className='leading-5 mb-3' style={{ fontSize: `${baseSize}px` }}>
            {tweet}
          </div>
          <div className={`flex items-center w-full ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
            <div className='flex items-center mr-[100px]' style={{
              color: ''
            }}>
              <Link href='/home'>
                <a
                  id='comments'
                  className='flex p-2 mr-3 rounded-full items-center justify-center transition-colors'
                  style={{
                    background: '',
                  }}>
                  <BiMessage className='w-4 h-4' />
                </a>
              </Link>
              {comments}
            </div>
            <div className='flex items-center mr-[100px]' style={{
              color: ''
            }}>
              <button
                id='retweet'
                className='z-10 p-2 mr-3 flex items-center justify-center rounded-full transition-colors'
                style={{
                  background: ''
                }}
              >
                <AiOutlineRetweet className='w-4 h-4' />
              </button>
              {retweets}
            </div>
            <div className='flex items-center mr-[100px]' style={{
              color: ''
            }}>
              <button
                id='like'
                className='z-10 p-2 mr-3 flex items-center justify-center rounded-full transition-colors'
                style={{
                  background: ''
                }}
              >
                <AiOutlineHeart className='w-4 h-4' />
              </button>
              {likes}
            </div>
            <div className='flex items-center' style={{
              color: ''
            }}>
              <button
                id='share'
                className='z-10 p-2 flex items-center justify-center rounded-full transition-colors'
                style={{
                  background: ''
                }}
              >
                <TbUpload className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default TweetBox

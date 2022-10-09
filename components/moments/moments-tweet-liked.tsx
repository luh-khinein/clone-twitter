import React, { useCallback, useContext, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiUser3Fill } from 'react-icons/ri'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { colors, darkTheme, lightTheme } from '../../libs/colors'
import SharePopup from '../tweet/share-popup'
import UserPopup from '../user-popup'
import { CommentIcon, LikeIconLine, RetweetIcon, ShareIcon } from '../icons/post-icon'
import ComposeDirectMessage from '../../pages/messages/compose-direct-message'
import { HiCheck } from 'react-icons/hi'

interface MomentsTweetValue {
  image: string
  username: string
  nickname: string
  post_date: string
  tweet: string
  comments: number
  retweets: number
  likes: number
}

const MomentsTweetPost: React.FC<MomentsTweetValue> = ({
  image,
  username,
  nickname,
  post_date,
  tweet,
  comments,
  retweets,
  likes
}) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const refShareButton = useRef<HTMLButtonElement>(null)
  const refUserButton = useRef<HTMLAnchorElement>(null)
  const [checkTweet, setCheckTweet] = useState(false)
  const handleCheckTweet = useCallback(() => {
    setCheckTweet(!checkTweet)
  }, [checkTweet])
  const [userPopup, setUserPopup] = useState(false)
  const [sharePopup, setSharePopup] = useState(false)
  const handleSharePopup = useCallback(() => {
    setSharePopup(!sharePopup)
  }, [sharePopup])
  const [messageModal, setMessageModal] = useState(false)
  const handleMessageModal = useCallback(() => {
    setMessageModal(true)
  }, [])
  return (
    <div>
      <button
        onClick={handleCheckTweet}
        className={`w-full text-start flex items-start justify-start px-3 py-2 border-b duration-200 ${backgroundTheme === 'light' ? 'border-gray-100 hover:bg-gray-50' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-slate-800 hover:brightness-110'}`}
        style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : '',
          fontSize: `${baseSize}px`,
        }}>
        <Link href={`/${username}`}>
          <a ref={refUserButton} onMouseEnter={() => setUserPopup(true)} onMouseLeave={() => setUserPopup(false)} className={`z-10 mr-2 rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}          >
            {image === '' ? (
              <RiUser3Fill className='w-8 h-8 m-3' />
            ) : (
              <Image
                src={image}
                width={63}
                height={63}
                className='rounded-full'
                alt={username}
              />
            )}
          </a>
        </Link>
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-between'>
            <Link href={`/${username}`}>
              <a onMouseEnter={() => setUserPopup(true)} onMouseLeave={() => setUserPopup(false)} className='flex items-center'>
                <span className='font-bold mr-1 hover:underline'>
                  {nickname}
                </span>
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                  @{username} · {post_date}
                </span>
              </a>
            </Link>
            <div className='flex items-center justify-center'>
              <input
                checked={checkTweet}
                type='radio'
                className={`flex items-center justify-center appearance-none w-5 h-5 border rounded-full cursor-pointer ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
                style={{
                  background: checkTweet ? colors.green : ''
                }}
              />
              {checkTweet && (
                <label className='absolute' style={{
                  color: backgroundTheme === 'light'
                    ? lightTheme.background
                    : backgroundTheme === 'dark'
                      ? darkTheme.background
                      : '#000'
                }}>
                  <HiCheck className='w-4 h-4' />
                </label>
              )}
            </div>
          </div>
          <span className='leading-5 mb-4'>
            {tweet}
          </span>
          <div className='flex items-center opacity-20 mt-3'>
            <div className='flex mr-4 items-center'>
              <button
                className='flex items-center jusitfy-center p-2 mr-2 rounded-full'
              >
                <CommentIcon />
              </button>
              {comments}
            </div>
            <div className='mr-4 flex items-center'>
              <button
                className='flex items-center jusitfy-center p-2 mr-2 rounded-full'
              >
                <RetweetIcon />
              </button>
              {retweets}
            </div>
            <div className='flex items-center text-[#f91880] fill-[#f91880]'>
              <button
                className='flex items-center jusitfy-center p-2 mr-2 rounded-full'
              >
                <LikeIconLine />
              </button>
              {likes}
            </div>
          </div>
        </div>
      </button>
      <div className={`flex absolute -translate-y-11 translate-x-[280px] items-center duration-200 hover:fill-[#1d9cf0] ${backgroundTheme === 'black' ? 'fill-[#a1a1aa]' : 'fill-[#94a3b8]'}`}>
        <button
          ref={refShareButton}
          onClick={handleSharePopup}
          className='flex items-center jusitfy-center p-2 rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)]'
        >
          <ShareIcon />
        </button>
      </div>
      {sharePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleSharePopup}>
          <SharePopup
            handleMessageModal={handleMessageModal}
            shareButton={refShareButton}
          />
        </div>
      )}
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
      <ComposeDirectMessage
        isActive={messageModal}
        setIsActive={setMessageModal}
      />
    </div>
  )
}

export default MomentsTweetPost

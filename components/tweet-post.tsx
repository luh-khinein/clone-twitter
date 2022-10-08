import React, { useCallback, useContext, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiMoreLine, RiUser3Fill } from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'
import { darkTheme } from '../libs/colors'
import { FontSizeContext } from '../utils/font-size'
import { useRouter } from 'next/router'
import MorePopup from './tweet/more-popup'
import SharePopup from './tweet/share-popup'
import BlockModal from './modal/block'
import Report from '../pages/i/safety/report_story_start'
import ComposeDirectMessage from '../pages/messages/compose-direct-message'
import TweetFooter from './tweet/footer'
import UserPopup from './user-popup'

interface TweetValue {
  image: string
  username: string
  nickname: string
  post_date: string
  tweet: string
  tweet_link: string
  comments: string
  retweets: string
  likes: string
}

const TweetPost: React.FC<TweetValue> = ({
  image,
  username,
  nickname,
  post_date,
  tweet,
  tweet_link,
  comments,
  retweets,
  likes
}) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  const refMorePopup = useRef<HTMLButtonElement>(null)
  const refSharePopup = useRef<HTMLButtonElement>(null)
  const refUserButton = useRef<HTMLAnchorElement>(null)
  const [userPopup, setUserPopup] = useState(false)
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])
  const [sharePopup, setSharePopup] = useState(false)
  const handleSharePopup = useCallback(() => {
    setSharePopup(!sharePopup)
  }, [sharePopup])
  const [messageModal, setMessageModal] = useState(false)
  const handleMessageModal = useCallback(() => {
    setMessageModal(true)
  }, [])
  const [blockModal, setBlockModal] = useState(false)
  const handleBlockModal = useCallback(() => {
    setBlockModal(true)
  }, [])
  const [reportModal, setReportModal] = useState(false)
  const handleReportModal = useCallback(() => {
    setReportModal(true)
  }, [])
  return (
    <>
      <button onClick={() => router.push(tweet_link)} className={`w-full max-w-[598px] absolute text-start flex items-start justify-start px-3 py-2 pb-14 border-b duration-200 ${backgroundTheme === 'light' ? 'border-gray-100 hover:bg-gray-50' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-slate-800 hover:brightness-110'}`} style={{
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
          </div>
          <span className='leading-5 mb-4'>
            {tweet}
          </span>
        </div>
      </button>
      <button
        ref={refMorePopup}
        onClick={handleMorePopup}
        className='z-20 absolute mt-1 translate-x-[34rem] p-2 flex items-center justify-center rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)] hover:text-[#1d9cf0]'
        style={{ pointerEvents: 'initial' }}
      >
        <RiMoreLine className='w-5 h-5' />
      </button>
      <TweetFooter
        comments={comments}
        retweets={retweets}
        likes={likes}
        handleSharePopup={handleSharePopup}
        shareButton={refSharePopup}
      />
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <MorePopup
            username={username}
            handleBlockModal={handleBlockModal}
            handleReportModal={handleReportModal}
            moreButton={refMorePopup}
          />
        </div>
      )}
      {sharePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleSharePopup}>
          <SharePopup
            handleMessageModal={handleMessageModal}
            shareButton={refSharePopup}
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
      <BlockModal
        username={username}
        isActive={blockModal}
        setIsActive={setBlockModal}
      />
      <Report
        isActive={reportModal}
        setIsActive={setReportModal}
      />
      <ComposeDirectMessage
        isActive={messageModal}
        setIsActive={setMessageModal}
      />
    </>
  )
}

export default TweetPost

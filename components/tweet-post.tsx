import React, { useCallback, useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiMoreLine, RiUser3Fill } from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'
import { darkTheme } from '../libs/colors'
import { FontSizeContext } from '../utils/font-size'
import { FaRegCommentAlt } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { TbUpload } from 'react-icons/tb'
import { useRouter } from 'next/router'
import MorePopup from './tweet/more-popup'
import SharePopup from './tweet/share-popup'
import BlockModal from './modal/block'
import Report from '../pages/i/safety/report_story_start'
import ComposeDirectMessage from '../pages/messages/compose-direct-message'

interface TweetValue {
  image: string
  username: string
  nickname: string
  post_date: string
  tweet: string
  tweet_link: string
  user_link: string
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
  user_link,
  comments,
  retweets,
  likes
}) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const router = useRouter()
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
      <Link href={tweet_link}>
        <a className={`w-full flex items-start justify-start px-3 py-2 border-b duration-200 ${backgroundTheme === 'light' ? 'border-gray-100 hover:bg-gray-50' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-slate-800 hover:brightness-110'}`} style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : '',
          fontSize: `${baseSize}px`
        }}>
          <button
            onClick={() => router.push(user_link)}
            className={`z-10 mr-2 rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}
          >
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
          </button>
          <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <span className='font-bold mr-1 hover:underline'>
                  {nickname}
                </span>
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                  @{username} · {post_date}
                </span>
              </div>
              <button
                onClick={handleMorePopup}
                className='z-10 p-2 flex items-center justify-center rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)] hover:text-[#1d9cf0]'
              >
                <RiMoreLine className='w-5 h-5' />
              </button>
            </div>
            <span className='leading-5 mb-4'>
              {tweet}
            </span>
            <div className={`flex items-center w-full ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
              <div className='z-10 mr-20 flex items-center duration-200 hover:text-[#1d9cf0]'>
                <button
                  className='flex items-center jusitfy-center p-2 mr-2 rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)]'
                >
                  <FaRegCommentAlt className='w-4 h-4' />
                </button>
                {comments}
              </div>
              <div className='z-10 mr-20 flex items-center duration-200 hover:text-[#00ba7c]'>
                <button
                  className='flex items-center jusitfy-center p-2 mr-2 rounded-full duration-200 hover:bg-[rgba(0,186,124,0.1)]'
                >
                  <AiOutlineRetweet className='w-4 h-4' />
                </button>
                {retweets}
              </div>
              <div className='z-10 mr-20 flex items-center duration-200 hover:text-[#f91880]'>
                <button
                  className='flex items-center jusitfy-center p-2 mr-2 rounded-full duration-200 hover:bg-[rgba(249,24,128,0.1)]'
                >
                  <AiOutlineHeart className='w-4 h-4' />
                </button>
                {likes}
              </div>
              <div className='z-10 flex items-center duration-200 hover:text-[#1d9cf0]'>
                <button
                  onClick={handleSharePopup}
                  className='flex items-center jusitfy-center p-2 rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)]'
                >
                  <TbUpload className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>
        </a>
      </Link>
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <MorePopup
            username={username}
            handleBlockModal={handleBlockModal}
            handleReportModal={handleReportModal}
          />
        </div>
      )}
      {sharePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleSharePopup}>
          <SharePopup
            handleMessageModal={handleMessageModal}
          />
        </div>
      )}
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

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { RiMoreLine, RiUser3Fill } from 'react-icons/ri'
import { ThemeContext } from '../../../../utils/theme'
import { FontSizeContext } from '../../../../utils/font-size'
import Layout from '../../../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../../../libs/colors'
import ReplyBox from '../../../../components/reply-box'
import AnotherMorePopup from '../../../../components/tweet/another-more-popup'
import SharePopup from '../../../../components/tweet/share-popup'
import BlockModal from '../../../../components/modal/block'
import Report from '../../../i/safety/report_story_start'
import ComposeDirectMessage from '../../../messages/compose-direct-message'
import Likes from './likes'
import Retweets from './retweets'
import { CommentIcon, LikeIconLine, RetweetIcon, ShareIcon } from '../../../../components/icons/post-icon'

const Tweet: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const refShareButton = useRef<HTMLButtonElement>(null)
  const refMoreButton = useRef<HTMLButtonElement>(null)
  const [likesModal, setLikesModal] = useState(false)
  const handleLikesModal = useCallback(() => {
    setLikesModal(true)
  }, [])
  const [retweetModal, setRetweetModal] = useState(false)
  const handleRetweetModal = useCallback(() => {
    setRetweetModal(true)
  }, [])
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
  // Make this later
  const id = 1
  const image = ''
  const username = 'username'
  const nickname = 'nickname'
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section id='home' className={`w-timeline min-h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} items-center pt-14`} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className='w-[598px] z-10 backdrop-blur-sm min-w-min flex justify-between items-center py-2 px-5 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='flex items-center'>
            <button
              onClick={() => router.back()}
              className={`rounded-full p-2 mr-5 flex items-center justify-center duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'}`}
              style={{
                background: backgroundTheme === 'light'
                  ? 'rgba(255, 255, 255, 0.85)'
                  : backgroundTheme === 'dark'
                    ? 'rgba(21, 32, 43, 0.85)'
                    : 'rgba(0, 0, 0, 0.85)'
              }}
            >
              <BsArrowLeft className='w-5 h-5' />
            </button>
            <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
              Tweet
            </h1>
          </div>
        </div>
        <div className={`w-full flex flex-col items-start justify-start px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center'>
              <button
                onClick={() => router.push('/username')}
                className={`mr-2 rounded-full flex items-center justify-center text-slate-500 bg-slate-300 duration-200 hover:brightness-95`}
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
              <div className='leading-5 flex flex-col items-start justify-start'>
                <button className='font-bold hover:underline' style={{ fontSize: `${xlSize}px` }}>
                  {nickname}
                </button>
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
                  @{username}
                </span>
              </div>
            </div>
            <button
              ref={refMoreButton}
              onClick={handleMorePopup}
              className='z-10 p-2 flex items-center justify-center rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)] hover:text-[#1d9cf0]'
            >
              <RiMoreLine className='w-5 h-5' />
            </button>
          </div>
          <span className='my-3' style={{ fontSize: `${xlSize}px` }}>
            Hi! O_o
          </span>
          <div className={`flex items-center ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            <button className='hover:underline'>
              00:00 AM ?? Jan 00, 0000
            </button>
            &nbsp;??&nbsp;
            <button className='hover:underline'>
              Twitter for Something
            </button>
          </div>
          <div className={`w-full flex items-center py-2 mt-3 border-y ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            <button
              onClick={handleRetweetModal}
              className='mr-8 flex items-center hover:underline' style={{ fontSize: `${baseSize}px` }}>
              0&nbsp;
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-800' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
                Retweets
              </span>
            </button>
            <Link href={`/${username}/status/${id}/retweets/with_comments`}>
              <a className='mr-8 flex items-center hover:underline' style={{ fontSize: `${baseSize}px` }}>
                0&nbsp;
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-800' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
                  Quote Tweet
                </span>
              </a>
            </Link>
            <button
              onClick={handleLikesModal}
              className='flex items-center hover:underline' style={{ fontSize: `${baseSize}px` }}>
              0&nbsp;
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-800' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
                Likes
              </span>
            </button>
          </div>
          <div className={`w-full flex items-center justify-around py-2 mb-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            <Link href='/home'>
              <a className={`flex items-center justify-center p-2 rounded-full duration-200 ${backgroundTheme === 'black' ? 'fill-zinc-400' : 'fill-slate-400'} hover:bg-[rgba(29,156,240,0.1)] hover:fill-[#1d9cf0]`}>
                <CommentIcon />
              </a>
            </Link>
            <button className={`flex items-center justify-center p-2 rounded-full duration-200 ${backgroundTheme === 'black' ? 'fill-zinc-400' : 'fill-slate-400'} hover:bg-[rgba(0,186,124,0.1)] hover:fill-[#00ba7c]`}>
              <RetweetIcon />
            </button>
            <button className={`flex items-center justify-center p-2 rounded-full duration-200 ${backgroundTheme === 'black' ? 'fill-zinc-400' : 'fill-slate-400'} hover:bg-[rgba(249,24,128,0.1)] hover:fill-[#f91880]`}>
              <LikeIconLine />
            </button>
            <button
              ref={refShareButton}
              onClick={handleSharePopup}
              className={`flex items-center justify-center p-2 rounded-full duration-200 ${backgroundTheme === 'black' ? 'fill-zinc-400' : 'fill-slate-400'} hover:bg-[rgba(29,156,240,0.1)] hover:fill-[#1d9cf0]`}>
              <ShareIcon />
            </button>
          </div>
          <ReplyBox />
        </div>
        <div className='flex w-full items-center justify-center py-20'>
          Comments
        </div>
      </section>
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <AnotherMorePopup
            id={id}
            username={username}
            moreButton={refMoreButton}
            handleBlockModal={handleBlockModal}
            handleReportModal={handleReportModal}
          />
        </div>
      )}
      {sharePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleSharePopup}>
          <SharePopup
            shareButton={refShareButton}
            handleMessageModal={handleMessageModal}
          />
        </div>
      )}
      <Likes
        isActive={likesModal}
        setIsActive={setLikesModal}
      />
      <Retweets
        isActive={retweetModal}
        setIsActive={setRetweetModal}
      />
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
    </Layout>
  )
}

export default Tweet

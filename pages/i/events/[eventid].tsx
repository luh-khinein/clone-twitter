import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useRef, useState } from 'react'
import Image from 'next/image'
import { BsArrowLeft, BsImage } from 'react-icons/bs'
import { RiUser3Fill } from 'react-icons/ri'
import { TbUpload } from 'react-icons/tb'
import Layout from '../../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'
import { AiOutlineFileGif } from 'react-icons/ai'
import { HiOutlineChartBar } from 'react-icons/hi'
import SharePopup from '../../../components/explorer/share-popup'
import ComposeDirectMessage from '../../messages/compose-direct-message'
import TweetPopup from '../../compose/tweet'

const Event: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize, exXlSize } = useContext(FontSizeContext)
  const refShareButton = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const [sharePopup, setSharePopup] = useState(false)
  const handleSharePopup = useCallback(() => {
    setSharePopup(!sharePopup)
  }, [sharePopup])
  const [messageModal, setMessageModal] = useState(false)
  const handleMessageModal = useCallback(() => {
    setMessageModal(true)
  }, [])
  const [tweetModal, setTweetModal] = useState(false)
  const handleTweetModal = useCallback(() => {
    setTweetModal(true)
  }, [])
  // Get this later
  const event_id = {
    id: 1,
    title: 'Some title',
    topic: 'TOPIC · time',
    image: '/trending/woodpecker-trending.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }

  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline h-full flex flex-col items-start justify-start border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='w-full max-w-[598px] z-10 backdrop-blur-sm flex items-center py-2 px-3 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='flex items-center w-full justify-between'>
            <div className='flex items-center w-max'>
              <button
                onClick={() => router.back()}
                className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
                style={{
                  backgroundColor: backgroundTheme === 'light'
                    ? lightTheme.background
                    : backgroundTheme === 'dark'
                      ? darkTheme.background
                      : ''
                }}
              >
                <BsArrowLeft className='w-5 h-5' />
              </button>
              <h1 className='font-bold max-w-[500px]' style={{
                fontSize: `${xlSize}px`
              }}>
                {event_id.title}
              </h1>
            </div>
            <button
              ref={refShareButton}
              onClick={handleSharePopup}
              className={`p-2 mx-1 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
              style={{
                backgroundColor: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}
            >
              <TbUpload className='w-5 h-5' />
            </button>
          </div>
        </div>
        <div className='flex flex-col pt-14 w-full'>
          <Image
            src={event_id.image}
            alt='Mr President'
            className='z-[4]'
            width={598}
            height={340}
          />
        </div>
        <div className='px-3 mt-2 mb-5 w-full flex flex-col leading-5'>
          <span className={`mb-1 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            {event_id.topic}
          </span>
          <h1 className='font-bold mb-1 mr-1' style={{ fontSize: `${exXlSize}px` }}>
            {event_id.title}
          </h1>
          <span style={{ fontSize: `${baseSize}px` }}>
            {event_id.description}
          </span>
        </div>
        <button onClick={handleTweetModal} className={`w-full py-3 px-3 flex items-center border-y ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <div className={`mr-2 bg-slate-300 text-slate-500 p-2 border rounded-full flex justify-center items-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`}>
            <RiUser3Fill className='w-7 h-7' />
          </div>
          <div className={`w-full px-2 py-3 border rounded-full flex ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
              Share your throughts
            </span>
          </div>
          <div className='flex items-center' style={{ color: colorTheme }}>
            <BsImage className='w-6 h-6 ml-2' />
            <AiOutlineFileGif className='w-6 h-6 mx-2' />
            <HiOutlineChartBar className='w-6 h-6' />
          </div>
        </button>
      </section>
      {sharePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleSharePopup}>
          <SharePopup
            shareButton={refShareButton}
            handleTweetModal={handleTweetModal}
            handleMessageModal={handleMessageModal}
          />
        </div>
      )}
      <TweetPopup
        message={`http://localhost:3000/i/events/${event_id.id}`}
        isActive={tweetModal}
        setIsActive={setTweetModal}
      />
      <ComposeDirectMessage
        message={`http://localhost:3000/i/events/${event_id.id}`}
        isActive={messageModal}
        setIsActive={setMessageModal}
      />
    </Layout>
  )
}

export default Event

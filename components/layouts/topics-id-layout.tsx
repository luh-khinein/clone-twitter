import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import TweetPopup from '../../pages/compose/tweet'
import ComposeDirectMessage from '../../pages/messages/compose-direct-message'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { ShareIcon } from '../icons/post-icon'
import SharePopup from '../topics/share-popup'

interface TopicValue {
  name: string
  isFollowed: boolean
  children: any
}

const TopicsIdLayout: React.FC<TopicValue> = ({ name, isFollowed, children }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const [sharePopup, setSharePopup] = useState(false)
  const handleSharePopup = useCallback(() => {
    setSharePopup(!sharePopup)
  }, [sharePopup])
  const [tweetModal, setTweetModal] = useState(false)
  const handleTweetModal = useCallback(() => {
    setTweetModal(true)
  }, [])
  const [messageModal, setMessageModal] = useState(false)
  const handleMessageModal = useCallback(() => {
    setMessageModal(true)
  }, [])
  const topicId = 1
  return (
    <section className={`w-timeline h-full border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='w-[598px] fixed top-0 z-10 flex justify-between px-3 py-3 backdrop-blur-sm' style={{
        background: backgroundTheme === 'light'
          ? 'rgba(255, 255, 255, 0.85)'
          : backgroundTheme === 'dark'
            ? 'rgba(21, 32, 43, 0.85)'
            : 'rgba(0, 0, 0, 0.85)'
      }}>
        <div className='flex items-center'>
          <button onClick={() => router.back()} className={`rounded-full p-2 mr-6 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'}`} style={{
            background: backgroundTheme === 'light'
              ? 'rgba(255, 255, 255, 0.3)'
              : backgroundTheme === 'dark'
                ? 'rgba(21, 32, 43, 0.3)'
                : 'rgba(0, 0, 0, 0.3)'
          }}>
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Topic
          </h1>
        </div>
        <button
          onClick={handleSharePopup}
          className={`flex items-center justify-center rounded-full p-2 duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`} style={{
            background: backgroundTheme === 'light'
              ? 'rgba(255, 255, 255, 0.3)'
              : backgroundTheme === 'dark'
                ? 'rgba(21, 32, 43, 0.3)'
                : 'rgba(0, 0, 0, 0.3)'
          }}>
          <ShareIcon />
        </button>
      </div>
      <div className='w-full mt-6'>
        {children}
      </div>
      {sharePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleSharePopup}>
          <SharePopup
            handleTweetModal={handleTweetModal}
            handleMessageModal={handleMessageModal}
          />
        </div>
      )}
      <TweetPopup
        message={`/i/topics/${topicId}`}
        isActive={tweetModal}
        setIsActive={setTweetModal}
      />
      <ComposeDirectMessage
        message={`/i/topics/${topicId}`}
        isActive={messageModal}
        setIsActive={setMessageModal}
      />
    </section>
  )
}

export default TopicsIdLayout

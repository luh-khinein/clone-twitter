import React, { useCallback, useContext, useState } from 'react'
import { ThemeContext } from '../utils/theme'
import TweetPopup from '../pages/compose/tweet'
import { FontSizeContext } from '../utils/font-size'
import { NewTweetIcon } from './icons/new-tweet-icon'

const TweetButton: React.FC = () => {
  const { colorTheme } = useContext(ThemeContext)
  const { baseSize, exSmSize } = useContext(FontSizeContext)
  const [showName, setShowName] = useState(false)
  const handleShowName = useCallback(() => {
    setShowName(true)
  }, [])
  const handleHiddeName = useCallback(() => {
    setShowName(false)
  }, [])
  const [tweetModal, setTweetModal] = useState(false)
  const handleTweetModal = useCallback(() => {
    setTweetModal(true)
  }, [])
  return (
    <>
      <div className='flex flex-col items-center'>
        <button
          onClick={handleTweetModal}
          onMouseEnter={handleShowName}
          onMouseLeave={handleHiddeName}
          className='w-outsideIcon h-outsideIcon 2xl:w-min 2xl:h-min flex items-center justify-center rounded-full hover:brightness-90 active:brightness-75 duration-200'
          style={{
            backgroundColor: colorTheme
          }}
        >
          <NewTweetIcon color='#fff' />
          <span className='hidden font-bold 2xl:inline-block text-white py-3 px-20' style={{
            fontSize: `${baseSize}px`
          }}>
            Tweet
          </span>
        </button>
        <div className={`absolute inline-block 2xl:hidden pointer-events-none z-20 bg-black text-white p-1 mt-14 rounded-md ${showName ? 'opacity-70' : 'opacity-0'} transition-opacity`} style={{
          fontSize: `${exSmSize}px`
        }}>
          Tweet
        </div>
      </div>
      <TweetPopup
        isActive={tweetModal}
        setIsActive={setTweetModal}
      />
    </>
  )
}

export default TweetButton

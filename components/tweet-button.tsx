import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../utils/theme'
import { useRouter } from 'next/router'
import { RiQuillPenFill } from 'react-icons/ri'
import PostBox from './post-box'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../libs/colors'

Modal.setAppElement('#__next')

const TweetButton: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const [showName, setShowName] = useState(false)
  const handleShowName = useCallback(() => {
    setShowName(true)
  }, [])
  const handleHiddeName = useCallback(() => {
    setShowName(false)
  }, [])
  const router = useRouter()

  return (
    <div className='flex flex-col items-center'>
      <Link href={`${router.asPath}/?value=tweet`} as='/compose/tweet'>
        <a
          onMouseEnter={handleShowName}
          onMouseLeave={handleHiddeName}
          className='w-outsideIcon h-outsideIcon 2xl:w-min 2xl:h-min flex items-center justify-center rounded-full hover:brightness-90 active:brightness-75 duration-200'
          style={{
            backgroundColor: colorTheme
          }}
        >
          <RiQuillPenFill className='w-icon h-icon text-white 2xl:hidden' />
          <span className='hidden text-xl font-bold 2xl:inline-block text-white py-3 px-10'>
            Tweet
          </span>
        </a>
      </Link>
      <div className={`absolute inline-block 2xl:hidden pointer-events-none z-20 bg-black text-white text-xs p-1 mt-14 rounded-md ${showName ? 'opacity-70' : 'opacity-0'} transition-opacity`}>
        Tweet
      </div>
      <Modal
        isOpen={!!router.query.value}
        onRequestClose={() => router.back()}
        className='border-none rounded-xl p-2 max-w-max max-h-max'
        overlayElement={(props, contentElement) => (
          <div {...props} className='flex flex-col items-center pt-12'>
            {contentElement}
          </div>
        )}
        style={{
          overlay: {
            zIndex: 20,
            background: 'rgba(0,0,0,0.5)'
          },
          content: {
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000',
          }
        }}
      >
        <PostBox autoTextAreaRows={false} rows={5} />
      </Modal>
    </div>
  )
}

export default TweetButton

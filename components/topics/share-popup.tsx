import React, { MouseEventHandler, useCallback, useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { BsLink45Deg } from 'react-icons/bs'
import { MailIconDisabled } from '../icons/mail-icon'
import { NewTweetIcon } from '../icons/new-tweet-icon'
import { useRouter } from 'next/router'

interface Props {
  shareButton: React.RefObject<HTMLButtonElement>
  handleMessageModal: MouseEventHandler
  handleTweetModal: MouseEventHandler
}

const SharePopup: React.FC<Props> = ({ shareButton, handleMessageModal, handleTweetModal }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(`http://localhost:3000${router.asPath}`)
  }, [router.asPath])
  return (
    <div className={`fixed z-30 min-w-[225px] ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      fontSize: `${baseSize}px`,
      left: `${shareButton.current!.getBoundingClientRect().x - 220}px`,
      top: `${shareButton.current!.getBoundingClientRect().y}px`
    }}>
      <button
        onClick={handleTweetModal}
        className={`w-full flex items-center py-5 px-5 ${backgroundTheme === 'light' ? 'bg-white hover:bg-gray-50' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'}`}
        style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
        }}
      >
        <div className={`mr-4 ${backgroundTheme === 'black' ? 'fill-zinc-400' : 'fill-slate-400'}`}>
          <NewTweetIcon />
        </div>
        Tweet this
      </button>
      <button
        onClick={handleMessageModal}
        className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
        <div className='flex items-center'>
          <span className={`mr-4 ${backgroundTheme === 'black' ? 'fill-zinc-400' : 'fill-slate-400'}`}>
            <MailIconDisabled />
          </span>
          Send via Direct Message
        </div>
      </button>
      <button
        onClick={handleCopyLink}
        className={`w-full flex items-center py-5 px-5 ${backgroundTheme === 'light' ? 'bg-white hover:bg-gray-50' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'}`}
        style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
        }}
      >
        <div className={`mr-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
          <BsLink45Deg className='w-5 h-5' />
        </div>
        Copy link to Topic
      </button>
    </div>
  )
}

export default SharePopup

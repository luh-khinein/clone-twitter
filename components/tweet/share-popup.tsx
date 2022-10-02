import React, { MouseEventHandler, useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { BsLink45Deg } from 'react-icons/bs'
import { MailIconDisabled } from '../icons/mail-icon'
import { AddBookmarkIcon } from '../icons/bookmark-icon'

interface Props {
  handleMessageModal: MouseEventHandler
}

const SharePopup: React.FC<Props> = ({ handleMessageModal }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <div className={`left-[33%] top-[25%] fixed z-30 min-w-[225px] ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      fontSize: `${baseSize}px`
    }}>
      <button
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
        Copy link to Tweet
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
        className={`w-full flex items-center py-5 px-5 ${backgroundTheme === 'light' ? 'bg-white hover:bg-gray-50' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'}`}
        style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
        }}
      >
        <div className={`mr-4 ${backgroundTheme === 'black' ? 'fill-zinc-400' : 'fill-slate-400'}`}>
          <AddBookmarkIcon />
        </div>
        Bookmarks
      </button>
    </div>
  )
}

export default SharePopup

import React, { MouseEventHandler, useCallback, useContext } from 'react'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { BsLink45Deg } from 'react-icons/bs'
import { RiQuillPenFill } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { useRouter } from 'next/router'

interface Props {
  handleTweetModal: MouseEventHandler
  handleMessageModal: MouseEventHandler
}

const ListUpPopup: React.FC<Props> = ({ handleTweetModal, handleMessageModal }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(`http://localhost:3000${router.asPath}`)
  }, [router.asPath])
  return (
    <div className={`fixed z-30 top-5 left-[40%] w-max h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
    }}>
      <button
        onClick={handleTweetModal}
        className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
        <div className='flex items-center'>
          <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <RiQuillPenFill className='w-5 h-5' />
          </div>
          <div className={`flex flex-col justify-start ml-5`}>
            <span style={{ fontSize: `${baseSize}px` }}>
              Tweet this
            </span>
          </div>
        </div>
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
          <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <AiOutlineMail className='w-5 h-5' />
          </div>
          <div className={`flex flex-col justify-start ml-5`}>
            <span style={{ fontSize: `${baseSize}px` }}>
              Send via Direct Message
            </span>
          </div>
        </div>
      </button>
      <button
        onClick={handleCopyLink}
        className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`}
        style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
        <div className='flex items-center'>
          <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <BsLink45Deg className='w-5 h-5' />
          </div>
          <div className={`flex flex-col justify-start ml-5`}>
            <span style={{ fontSize: `${baseSize}px` }}>
              Copy link to list
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default ListUpPopup 

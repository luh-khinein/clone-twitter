import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { RiMapPinLine, RiUser3Fill } from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import { BsEmojiSmile, BsImage } from 'react-icons/bs'
import { AiOutlineFileGif } from 'react-icons/ai'
import { FontSizeContext } from '../utils/font-size'

const ReplyBox: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [replyState, setReplyState] = useState('')
  const [onFocus, setOnFocus] = useState(false)
  const handleOnFocus = useCallback(() => {
    setOnFocus(true)
  }, [])
  const handleReplyState = useCallback((e: any) => {
    e.persist()
    setReplyState(e.target.value)
  }, [])
  return (
    <div className='flex flex-row mt-4 py-2 w-full' style={{
      color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
    }}>
      <div className='flex justify-center text-slate-400'>
        <Link href='/username'>
          <a className={`bg-slate-300 text-slate-500 w-12 h-12 border rounded-full flex justify-center items-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`}>
            <RiUser3Fill className='w-7 h-7' />
          </a>
        </Link>
      </div>
      <div className='min-h-min flex flex-1 flex-col justify-center'>
        {onFocus && (
          <div className={`flex items-center px-2 absolute mb-28 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            Replying to
            <Link href='/home'>
              <a style={{ color: colorTheme }}>
                &nbsp;@username
              </a>
            </Link>
          </div>
        )}
        <form className='flex w-full' style={{
          flexDirection: onFocus ? 'column' : 'row'
        }}>
          <textarea
            onFocus={handleOnFocus}
            id='post'
            name='post'
            className='text-lg w-full min-h-min outline-none bg-transparent overflow-hidden resize-none p-2 placeholder:text-xl placeholder:items-center'
            placeholder="What's happening"
            maxLength={280}
            rows={1}
            onChange={handleReplyState}
            value={replyState}
          />
          <div className='flex items-center pt-4 w-full' style={{
            color: colorTheme,
            justifyContent: onFocus ? 'space-between' : 'end'
          }}>
            {onFocus && (
              <ul className='flex'>
                <li>
                  <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800' : 'hover:brightness-75'} duration-200`} style={{
                    backgroundColor: backgroundTheme === 'dark'
                      ? darkTheme.background
                      : ''
                  }}>
                    <BsImage className='w-5 h-5' />
                  </button>
                </li>
                <li>
                  <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800' : 'hover:brightness-75'} duration-200`} style={{
                    backgroundColor: backgroundTheme === 'dark'
                      ? darkTheme.background
                      : ''
                  }}>
                    <AiOutlineFileGif className='w-5 h-5' />
                  </button>
                </li>
                <li>
                  <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800' : 'hover:brightness-75'} duration-200`} style={{
                    backgroundColor: backgroundTheme === 'dark'
                      ? darkTheme.background
                      : ''
                  }}>
                    <BsEmojiSmile className='w-5 h-5' />
                  </button>
                </li>
                <li>
                  <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'active:hover:bg-blue-100' : backgroundTheme === 'black' ? 'bg-zinc-900 hvoer:bg-zinc-800' : 'active:hover:brightness-75'} disabled:bg-blend-lighten duration-200`} disabled style={{
                    backgroundColor: backgroundTheme === 'dark'
                      ? darkTheme.background
                      : '',
                    opacity: .5
                  }}>
                    <RiMapPinLine className='w-5 h-5' />
                  </button>
                </li>
              </ul>
            )}
            <button type='submit' className='items-center justify-center text-white rounded-full font-bold px-5 py-1.5 disabled:bg-slate-100 active:hover:brightness-90 active:brightness-75 duration-200' disabled={replyState === ''} style={{
              display: onFocus ? 'flex' : 'absolute',
              background: colorTheme,
              fontSize: `${baseSize}px`,
              opacity: replyState === '' ? .5 : 1
            }}>
              Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReplyBox

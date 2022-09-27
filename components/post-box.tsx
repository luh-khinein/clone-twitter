import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineFileGif } from 'react-icons/ai'
import { HiOutlineChartBar } from 'react-icons/hi'
import { RiUser3Fill, RiMapPinLine } from 'react-icons/ri'
import { BsImage, BsEmojiSmile, BsCalendar4Event } from 'react-icons/bs'
import { ThemeContext } from '../utils/theme'
import { lightTheme, darkTheme } from '../libs/colors'
import AutoTextArea from './auto-textarea'
import { FontSizeContext } from '../utils/font-size'

interface PostBoxValue {
  rows: number
  autoTextAreaRows: boolean
  message?: string
}

const PostBox: React.FC<PostBoxValue> = ({ rows, autoTextAreaRows, message }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  // configure later
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [input, setInput] = useState({ post: message ? message : '' })
  const handleOnChange = useCallback((e: any) => {
    e.persist()
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }, [])

  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    if (input.post.length && buttonDisabled === true) {
      setButtonDisabled(false)
    } else if (!input.post.length && buttonDisabled === false) {
      setButtonDisabled(true)
    }
  }, [input.post, buttonDisabled])

  return (
    <div className='flex flex-row mt-4 py-2 px-5 w-[600px]'>
      <div className='flex justify-center text-slate-400'>
        <Link href='/username'>
          <a className={`bg-slate-300 text-slate-500 w-12 h-12 border rounded-full flex justify-center items-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`}>
            <RiUser3Fill className='w-7 h-7' />
          </a>
        </Link>
      </div>
      <div className='min-h-min flex flex-1 flex-col justify-center' style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <form className='flex flex-col min-w-full'>
          {autoTextAreaRows
            ? (
              <AutoTextArea
                id='post'
                name='post'
                className='text-lg w-full min-h-min outline-none bg-transparent overflow-hidden resize-none p-2 placeholder:text-xl placeholder:items-center'
                placeholder="What's happening"
                maxLength={280}
                rows={rows}
                value={input.post}
                onChange={handleOnChange}
              />
            )
            : (
              <textarea
                id='post'
                name='post'
                className='text-lg w-full min-h-min outline-none bg-transparent overflow-hidden resize-none p-2 placeholder:text-xl placeholder:items-center'
                placeholder="What's happening"
                maxLength={280}
                rows={rows}
                value={input.post}
                onChange={handleOnChange}
              />
            )
          }
          <div className='flex items-center justify-between pt-4' style={{
            color: colorTheme
          }}>
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
                  <HiOutlineChartBar className='w-5 h-5' />
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
                <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800' : 'hover:brightness-75'} duration-200`} style={{
                  backgroundColor: backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
                }}>
                  <BsCalendar4Event className='w-5 h-5' />
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
            <button type='submit' className='flex items-center justify-center text-white rounded-full font-bold px-5 py-1.5 disabled:bg-slate-100 active:hover:brightness-90 active:brightness-75 duration-200' disabled={buttonDisabled} style={{
              background: colorTheme,
              fontSize: `${baseSize}px`,
              opacity: buttonDisabled ? .5 : 1
            }}>
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostBox

import React, { useContext } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import KeyboardKey from './keyboard-key'

const Actions: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <section className='h-max flex flex-col justify-start items-start py-2'>
      <h2 className='font-bold px-5' style={{
        fontSize: `${xlSize}px`
      }}>
        Actions
      </h2>
      <ul className={`w-[240px] px-5 border-r-2 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-900' : 'border-slate-800'}`} style={{
        fontSize: `${smSize}px`
      }}>
        <li className='flex justify-between items-center my-2'>
          <span>
            New Tweet
          </span>
          <KeyboardKey name='n' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Send Tweet
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='CTRL' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='Enter' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            New Direct Message
          </span>
          <KeyboardKey name='m' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Search
          </span>
          <KeyboardKey name='/' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Like
          </span>
          <KeyboardKey name='l' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Reply
          </span>
          <KeyboardKey name='r' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Retweet
          </span>
          <KeyboardKey name='t' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Share Tweet
          </span>
          <KeyboardKey name='s' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Bookmark
          </span>
          <KeyboardKey name='b' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Mute account
          </span>
          <KeyboardKey name='u' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Block account
          </span>
          <KeyboardKey name='x' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Open Tweet details
          </span>
          <KeyboardKey name='Enter' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Expand photo
          </span>
          <KeyboardKey name='o' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Open/Close Messages dock
          </span>
          <KeyboardKey name='i' />
        </li>
      </ul>
    </section>
  )
}

export default Actions

import React, { useContext } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import KeyboardKey from './keyboard-key'

const Navigation: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <section className='h-max flex flex-col justify-start items-start py-2'>
      <h2 className='font-bold px-4' style={{
        fontSize: `${xlSize}px`
      }}>
        Navigation
      </h2>
      <ul className={`w-[200px] px-5 border-r-2 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-900' : 'border-slate-800'}`} style={{
        fontSize: `${smSize}px`
      }}>
        <li className='flex justify-between items-center my-2'>
          <span>
            Shortcut help
          </span>
          <KeyboardKey name='?' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Next Tweet
          </span>
          <KeyboardKey name='j' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Previous Tweet
          </span>
          <KeyboardKey name='k' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Page down
          </span>
          <KeyboardKey name='Space' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Load new Tweets
          </span>
          <KeyboardKey name='.' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Home
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='h' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Explore
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='e' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Notifications
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='n' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Mentions
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='r' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Profile
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='p' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Likes
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='l' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Lists
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='i' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Direct Messages
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='m' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Moment Maker
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='c' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Settings
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='s' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Bookmarks
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='b' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Go to user...
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='u' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Display settings
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='g' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='d' />
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Navigation

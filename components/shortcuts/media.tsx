import React, { useContext } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import KeyboardKey from './keyboard-key'

const Media: React.FC = () => {
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <section className='h-max flex flex-col justify-start items-start px-4 py-2'>
      <h2 className='font-bold' style={{
        fontSize: `${xlSize}px`
      }}>
        Media
      </h2>
      <ul className='w-[230px]' style={{
        fontSize: `${smSize}px`
      }}>
        <li className='flex justify-between items-center my-2'>
          <span>
            Pause/Play selected Video
          </span>
          <KeyboardKey name='k' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Pause/Play selected Video
          </span>
          <KeyboardKey name='space' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Mute selected Video
          </span>
          <KeyboardKey name='m' />
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Go to Audio Dock
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='a' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='d' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Play/Pause Audio Dock
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='a' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='space' />
          </div>
        </li>
        <li className='flex justify-between items-center my-2'>
          <span>
            Mute/Unmute Audio Dock
          </span>
          <div className='flex items-center'>
            <KeyboardKey name='a' />
            <span className='mx-1'>
              +
            </span>
            <KeyboardKey name='m' />
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Media

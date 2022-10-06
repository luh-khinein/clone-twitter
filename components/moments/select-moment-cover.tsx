import React, { useCallback, useContext, useState } from 'react'
import { darkTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import InputSettings from '../settings/input-settings'

export const FromMoment: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex flex-col'>
      <span className={`px-3 my-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
        fontSize: `${baseSize}px`
      }}>
        Choose a photo, video, or GIF from added Tweets to represent your Moments.
      </span>
      <div className={`w-full min-h-[70px] flex flex-col ${backgroundTheme === 'light' ? 'bg-gray-50' : backgroundTheme === 'black' ? 'bg-zinc-900' : 'brightness-110'}`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : ''
      }}>
        <div className={`flex w-full h-[70px] items-center justify-center ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
          No media found
        </div>
      </div>
    </div>
  )
}

export const FromTweetURL: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [input, setInput] = useState('')
  const handleInput = useCallback((e: any) => {
    setInput(e.target.value)
  }, [])
  return (
    <div className='w-full flex flex-col'>
      <span className={`px-3 my-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
        fontSize: `${baseSize}px`
      }}>
        Choose a photo, video, or GIF from added Tweets to represent your Moments.
      </span>
      <InputSettings
        id=''
        type='text'
        placeholder='Paste Tweet URL'
        hasConditions={false}
        handleOnChange={handleInput}
        value={input}
      />
      <div className={`w-full min-h-[70px] flex flex-col ${backgroundTheme === 'light' ? 'bg-gray-50' : backgroundTheme === 'black' ? 'bg-zinc-900' : 'brightness-110'}`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : ''
      }}>
        <div className={`flex w-full h-[70px] items-center justify-center ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
          No media found
        </div>
      </div>
    </div>
  )
}

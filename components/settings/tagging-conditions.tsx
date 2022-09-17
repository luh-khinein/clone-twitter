import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { HiCheck } from 'react-icons/hi'
import s from '../../styles/radio.module.css'

const TaggingConditions: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [radioStates, setRadioStates] = useState({ anyone_can: true, only_follow_you: false })
  const handleRadioStates = useCallback((e: any) => {
    e.persist()
    if (e.target.id === 'anyone_can') {
      setRadioStates({
        anyone_can: true,
        only_follow_you: false,
      })
    } else {
      setRadioStates({
        anyone_can: false,
        only_follow_you: true,
      })
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex items-center justify-between px-3 py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Anyone can tag you
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='anyone_can'
            checked={radioStates.anyone_can}
            onClick={handleRadioStates}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {radioStates.anyone_can && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between px-3 py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Only people you follow can tag you
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='only_follow_you'
            checked={radioStates.only_follow_you}
            onClick={handleRadioStates}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {radioStates.only_follow_you && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaggingConditions 

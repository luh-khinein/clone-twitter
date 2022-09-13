import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import s from '../../styles/teams-permition.module.css'
import { ThemeContext } from '../../utils/theme'
import { HiCheck } from 'react-icons/hi'

const TeamsPermition: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [radioStates, setRadioStates] = useState({ radio1: true, radio2: false })
  const handleRadioStates = useCallback((e: any) => {
    e.persist()
    if (e.target.id === 'radio1') {
      setRadioStates({
        radio1: true,
        radio2: false,
      })
    } else {
      setRadioStates({
        radio1: false,
        radio2: true,
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
          Allow anyone to add you to their team
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='radio1'
            checked={radioStates.radio1}
            onClick={handleRadioStates}
            type='radio'
            className={`${s.radio} border-[3px] ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {radioStates.radio1 && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between px-3 py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Only allow people you follow to add you to their team
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='radio2'
            checked={radioStates.radio2}
            onClick={handleRadioStates}
            type='radio'
            className={`${s.radio} border-[3px] ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {radioStates.radio2 && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamsPermition

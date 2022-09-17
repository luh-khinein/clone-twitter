import React, { useCallback, useContext, useEffect, useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/radio.module.css'

const MuteDurationSettings: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [muteSettings, setMuteSettings] = useState({
    until_unmute: true,
    day: false,
    week: false,
    month: false,
  })
  const handleSettingsToFalse = useCallback(() => {
    setMuteSettings({
      until_unmute: false,
      day: false,
      week: false,
      month: false,
    })
  }, [])
  const handleMuteSettings = useCallback((e: any) => {
    e.persist()
    handleSettingsToFalse()
    setMuteSettings(prev => ({
      ...prev,
      [e.target.id]: true
    }))
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex items-center justify-between py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Until you unmute the word
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='until_unmute'
            checked={muteSettings.until_unmute}
            onClick={handleMuteSettings}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {muteSettings.until_unmute && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          24 hours
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='day'
            checked={muteSettings.day}
            onClick={handleMuteSettings}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {muteSettings.day && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          7 days
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='week'
            checked={muteSettings.week}
            onClick={handleMuteSettings}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {muteSettings.week && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          30 days
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='month'
            checked={muteSettings.month}
            onClick={handleMuteSettings}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {muteSettings.month && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export default MuteDurationSettings

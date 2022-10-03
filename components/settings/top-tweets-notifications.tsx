import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/radio.module.css'
import { HiCheck } from 'react-icons/hi'

const TopTweetsNotifications: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [notificationsSettings, setNotificationsSettings] = useState({
    daily: false,
    weekly: false,
    periodically: true,
    off: false
  })
  const handleNotificationsToFalse = useCallback(() => {
    setNotificationsSettings({
      daily: false,
      weekly: false,
      periodically: false,
      off: false
    })
  }, [])
  const handleNotificationsSettings = useCallback((e: any) => {
    e.persist()
    handleNotificationsToFalse()
    setNotificationsSettings(prev => ({
      ...prev,
      [e.target.id]: true,
    }))
  }, [handleNotificationsToFalse])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

  return (
    <div className='flex flex-col w-full my-5'>
      <h2 className='font-bold px-3 mb-1' style={{ fontSize: `${baseSize}px` }}>
        Top Tweets and Stories
      </h2>
      <div className='w-full flex items-center justify-between px-3 py-1'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Daily
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='daily'
            checked={notificationsSettings.daily}
            onClick={handleNotificationsSettings}
            type='radio'
            className={`mr-2 ${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {notificationsSettings.daily && (
            <label className='text-white absolute mr-2'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between px-3 py-1'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Weekly
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='weekly'
            checked={notificationsSettings.weekly}
            onClick={handleNotificationsSettings}
            type='radio'
            className={`mr-2 ${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {notificationsSettings.weekly && (
            <label className='text-white absolute mr-2'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between px-3 py-1'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Periodically
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='periodically'
            checked={notificationsSettings.periodically}
            onClick={handleNotificationsSettings}
            type='radio'
            className={`mr-2 ${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {notificationsSettings.periodically && (
            <label className='text-white absolute mr-2'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between px-3 py-1'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Off
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='off'
            checked={notificationsSettings.off}
            onClick={handleNotificationsSettings}
            type='radio'
            className={`mr-2 ${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {notificationsSettings.off && (
            <label className='text-white absolute mr-2'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopTweetsNotifications

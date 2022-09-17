import React, { useCallback, useContext, useEffect, useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/radio.module.css'

const MuteFromSettings: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [muteFromSettings, setMuteFrom] = useState({
    any: false,
    people_no_follow: true,
  })
  const handleSettingsToFalse = useCallback(() => {
    setMuteFrom({
      any: false,
      people_no_follow: false,
    })
  }, [])
  const handleMuteFromSettings = useCallback((e: any) => {
    e.persist()
    handleSettingsToFalse()
    setMuteFrom(prev => ({
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
    <div className='flex flex-col w-full px-3'>
      <div className='w-full flex items-center justify-between py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          From anyone
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='any'
            checked={muteFromSettings.any}
            onClick={handleMuteFromSettings}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {muteFromSettings.any && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between py-2'>
        <span style={{ fontSize: `${baseSize}px` }}>
          From people you don't follow
        </span>
        <div className='flex items-center justify-center bg-none'>
          <input
            id='people_no_follow'
            checked={muteFromSettings.people_no_follow}
            onClick={handleMuteFromSettings}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {muteFromSettings.people_no_follow && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export default MuteFromSettings

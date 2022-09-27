import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import t from '../../styles/toggle-switch.module.css'
import r from '../../styles/radio.module.css'
import { HiCheck } from 'react-icons/hi'

const FiltersSettings: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const [repliesSettings, setRepliesSettings] = useState({
    include_replies: true,
    only_replies: false,
  })
  const [linksSettings, setLinksSettings] = useState({
    include_links: true,
    only_links: false,
  })
  const handleSetRepliesToFalse = useCallback(() => {
    setRepliesSettings({ include_replies: false, only_replies: false })
  }, [])
  const handleSetLinksToFalse = useCallback(() => {
    setLinksSettings({
      include_links: false,
      only_links: false,
    })
  }, [])
  const handleRepliesSettings = useCallback((e: any) => {
    e.persist()
    handleSetRepliesToFalse()
    setRepliesSettings(prev => ({
      ...prev,
      [e.target.id]: true
    }))
  }, [handleSetRepliesToFalse])
  const handleLinksSettings = useCallback((e: any) => {
    e.persist()
    handleSetLinksToFalse()
    setLinksSettings(prev => ({
      ...prev,
      [e.target.id]: true
    }))
  }, [handleSetLinksToFalse])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

  return (
    <div className={`w-full flex flex-col items-start justify-start py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h2 className='px-3 font-bold' style={{ fontSize: `${xlSize}px` }}>
        Filters
      </h2>
      <div className={`flex flex-col w-full py-3 px-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className={`flex items-center justify-between w-full py-5 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <span className='font-semibold' style={{ fontSize: `${baseSize}px` }}>
            Replies
          </span>
          <input
            type='checkbox'
            className={t.toggle}
          />
        </div>
        <div className='w-full flex items-center justify-between pt-5 pb-3'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Include replies and original Tweets
          </span>
          <div className='flex items-center justify-center'>
            <input
              id='include_replies'
              checked={repliesSettings.include_replies}
              onChange={handleRepliesSettings}
              type='radio'
              className={`${r.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
            />
            {repliesSettings.include_replies && (
              <label className='text-white absolute'>
                <HiCheck className='w-4 h-4' />
              </label>
            )}
          </div>
        </div>
        <div className='w-full flex items-center justify-between pb-3'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Only show replies
          </span>
          <div className='flex items-center justify-center'>
            <input
              id='only_replies'
              checked={repliesSettings.only_replies}
              onChange={handleRepliesSettings}
              type='radio'
              className={`${r.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
            />
            {repliesSettings.only_replies && (
              <label className='text-white absolute'>
                <HiCheck className='w-4 h-4' />
              </label>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full py-3 px-3'>
        <div className={`flex items-center justify-between w-full py-5 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <span className='font-semibold' style={{ fontSize: `${baseSize}px` }}>
            Links
          </span>
          <input
            type='checkbox'
            className={t.toggle}
          />
        </div>
        <div className='w-full flex items-center justify-between pt-5 pb-3'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Include Tweets with links
          </span>
          <div className='flex items-center justify-center'>
            <input
              id='include_links'
              checked={linksSettings.include_links}
              onChange={handleLinksSettings}
              type='radio'
              className={`${r.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
            />
            {linksSettings.include_links && (
              <label className='text-white absolute'>
                <HiCheck className='w-4 h-4' />
              </label>
            )}
          </div>
        </div>
        <div className='w-full flex items-center justify-between'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Only show Tweets with links
          </span>
          <div className='flex items-center justify-center'>
            <input
              id='only_links'
              checked={linksSettings.only_links}
              onChange={handleLinksSettings}
              type='radio'
              className={`${r.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
            />
            {linksSettings.only_links && (
              <label className='text-white absolute'>
                <HiCheck className='w-4 h-4' />
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersSettings

import React, { useCallback, useContext, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import InputSettings from '../settings/input-settings'

const EngagementSettings: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [engageSettings, setEngageSettings] = useState({
    m_replies: '',
    m_likes: '',
    m_retweets: '',
  })
  const handleEngageSettings = useCallback((e: any) => {
    e.persist()
    setEngageSettings(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }, [])
  return (
    <div className={`w-full flex flex-col items-start justify-start py-2 px-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h2 className='font-bold mb-3' style={{ fontSize: `${xlSize}px` }}>
        Engagement
      </h2>
      <div className='w-full flex flex-col mb-3'>
        <InputSettings
          id='m_replies'
          placeholder='Minimum replies'
          type='number'
          hasConditions={false}
          handleOnChange={handleEngageSettings}
          value={engageSettings.m_replies}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: 280 - Tweets with at least 280 replies
        </span>
      </div>
      <div className='w-full flex flex-col mb-3'>
        <InputSettings
          id='m_likes'
          placeholder='Minimum likes'
          type='number'
          hasConditions={false}
          handleOnChange={handleEngageSettings}
          value={engageSettings.m_likes}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: 280 - Tweets with at least 280 likes
        </span>
      </div>
      <div className='w-full flex flex-col'>
        <InputSettings
          id='m_retweets'
          placeholder='Minimum Retweets'
          type='number'
          hasConditions={false}
          handleOnChange={handleEngageSettings}
          value={engageSettings.m_retweets}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: 280 - Tweets with at least 280 Retweets
        </span>
      </div>
    </div>
  )
}

export default EngagementSettings

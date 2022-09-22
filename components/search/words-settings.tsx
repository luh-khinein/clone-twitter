import React, { useCallback, useContext, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import InputSettings from '../settings/input-settings'

const WordsSettings: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [wordsState, setWordsState] = useState({
    all: '',
    exact: '',
    any: '',
    none: '',
    hashs: ''
  })
  const handleWordsState = useCallback((e: any) => {
    e.persist()
    setWordsState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }, [])
  return (
    <div className={`w-full flex flex-col items-start justify-start py-2 px-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h2 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
        Words
      </h2>
      <div className='flex flex-col w-full'>
        <InputSettings
          id='all'
          type='text'
          placeholder='All of these words'
          handleonChange={handleWordsState}
          hasConditions={false}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: what&apos;s happening - contains both &quot;what&apos;s&quot; and &quot;happening&quot;
        </span>
      </div>
    </div>
  )
}

export default WordsSettings

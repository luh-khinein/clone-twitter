import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import InputSettings from '../settings/input-settings'
import s from '../../styles/select.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md'

const WordsSettings: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
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
  const language = 'Any language'

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
    if (backgroundTheme === 'light') {
      document.documentElement.style.setProperty(
        '--border-color', 'rgb(243, 244, 246)'
      )
    } else if (backgroundTheme === 'dark') {
      document.documentElement.style.setProperty(
        '--border-color', 'rgb(30, 41, 59)'
      )
    } else {
      document.documentElement.style.setProperty(
        '--border-color', 'rgb(39, 39, 42)'
      )
    }
  }, [backgroundTheme, colorTheme])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--base-font-size', `${baseSize}px`
    )
  }, [baseSize])

  return (
    <div className={`w-full flex flex-col items-start justify-start py-2 px-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h2 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
        Words
      </h2>
      <div className='flex flex-col w-full mb-5'>
        <InputSettings
          id='all'
          type='text'
          placeholder='All of these words'
          handleOnChange={handleWordsState}
          hasConditions={false}
          value={wordsState.all}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: what&apos;s happening - contains both &quot;what&apos;s&quot; and &quot;happening&quot;
        </span>
      </div>
      <div className='flex flex-col w-full mb-5'>
        <InputSettings
          id='exact'
          type='text'
          placeholder='This exact phrase'
          handleOnChange={handleWordsState}
          hasConditions={false}
          value={wordsState.exact}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: happy hour - contains the exact phrase &quot;happy hour&quot;
        </span>
      </div>
      <div className='flex flex-col w-full mb-5'>
        <InputSettings
          id='any'
          type='text'
          placeholder='Any of these words'
          handleOnChange={handleWordsState}
          hasConditions={false}
          value={wordsState.any}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: cats dogs - contains either &quot;cats&quot; or &quot;dogs&quot; (or both)
        </span>
      </div>
      <div className='flex flex-col w-full mb-5'>
        <InputSettings
          id='none'
          type='text'
          placeholder='None of these words'
          handleOnChange={handleWordsState}
          hasConditions={false}
          value={wordsState.none}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: cats dogs - does not contain &quot;cats&quot; and does not contains &quot;dogs&quot;
        </span>
      </div>
      <div className='flex flex-col w-full mb-5'>
        <InputSettings
          id='hashs'
          type='text'
          placeholder='These hashtags'
          handleOnChange={handleWordsState}
          hasConditions={false}
          value={wordsState.hashs}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: #ThrowbackThursday - contains the hashtag #ThrowbackThursday
        </span>
      </div>
      <div className='relative w-full px-3 flex'>
        <select
          name='languages'
          className={`${s.form_select} w-full rounded-xl`}
        >
          <option selected={true} value={language}>{language}</option>
          <option value='English'>English</option>
          <option value='Portuguese - português'>Portuguese - português</option>
        </select>
        <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
          <span className={s.form_label}>
            Language
          </span>
          <span className={s.form_icon}>
            <MdKeyboardArrowDown className='h-10 w-10' />
          </span>
        </label>
      </div>
    </div>
  )
}

export default WordsSettings

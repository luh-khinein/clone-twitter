import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState, } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/search-bar.module.css'

interface SearchBarValue {
  placeholder: string
  focus: Dispatch<SetStateAction<boolean>>
}

const SearchBar: React.FC<SearchBarValue> = ({ placeholder, focus }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const [input, setInput] = useState('')
  const handleOnChange = useCallback((e: any) => {
    e.persist()
    setInput(e.target.value)
  }, [])

  useEffect(() => {
    if (input !== '') {
      focus(true)
    }
  }, [input, focus])

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
      document.documentElement.style.setProperty(
        '--opaque-text-color', 'rgb(39, 39, 42)'
      )
    }
  }, [backgroundTheme, colorTheme])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--small-font-size', `${smSize}px`
    )
    document.documentElement.style.setProperty(
      '--base-font-size', `${baseSize}px`
    )
  }, [baseSize, smSize])

  return (
    <div className='relative w-full bg-none'>
      <input
        onClick={() => focus(true)}
        onChange={handleOnChange}
        value={input}
        placeholder={placeholder}
        className={s.input_element}
      />
      <label className={s.icon_element}>
        <RiSearch2Line />
      </label>
    </div>
  )
}

export default SearchBar

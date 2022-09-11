import React, { useContext, useEffect, useRef } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/input.module.css'

interface Props {
  id: string
  placeholder: string
  handleOnChange: (e: any) => void
}

const InputPassword: React.FC<Props> = ({ id, placeholder, handleOnChange }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const refInput = useRef<HTMLInputElement>(null)

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
      '--small-font-size', `${smSize}px`
    )
    document.documentElement.style.setProperty(
      '--base-font-size', `${baseSize}px`
    )
  }, [baseSize])

  return (
    <div className='relative w-full h-16'>
      <input
        id={id}
        type='password'
        onChange={handleOnChange}
        ref={refInput}
        className={s.form_input}
        placeholder=' '
      />
      <label className={s.form_label}>
        {placeholder}
      </label>
    </div>
  )
}

export default InputPassword

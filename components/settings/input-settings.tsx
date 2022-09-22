import React, { HTMLInputTypeAttribute, useContext, useEffect } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/input.module.css'

interface Props {
  id: string
  refInput?: React.RefObject<HTMLInputElement>
  type: HTMLInputTypeAttribute
  placeholder: string
  hasConditions: boolean
  conditions?: boolean
  handleOnChange: (e: any) => void
  value: string
}

const InputSettings: React.FC<Props> = ({ id, refInput, placeholder, type, hasConditions, conditions, handleOnChange, value }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)

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
      {!hasConditions ? (
        <>
          <input
            id={id}
            type={type}
            onChange={handleOnChange}
            value={value}
            ref={refInput}
            className={s.form_input}
            placeholder=' '
          />
          <label className={`${s.form_label} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-800'}`}>
            {placeholder}
          </label>
        </>
      ) : (
        <>
          <input
            id={id}
            type={type}
            onChange={handleOnChange}
            ref={refInput}
            className={conditions ? s.form_input : s.form_input_error}
            placeholder=' '
          />
          <label className={`${s.form_label} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-800'}`}>
            {placeholder}
          </label>
        </>
      )}
    </div>
  )
}

export default InputSettings

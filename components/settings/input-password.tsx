import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

interface Props {
  id: string
  placeholder: string
  handleOnChange: (e: any) => void
}

const InputPassword: React.FC<Props> = ({ id, placeholder, handleOnChange }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const refInput = useRef<HTMLInputElement>(null)
  const [inputFocus, setInputFocus] = useState(false)
  const handleInputFocus = useCallback(() => {
    setInputFocus(!inputFocus)
  }, [inputFocus])

  useEffect(() => {
    if (document.activeElement === refInput.current) {
      setInputFocus(true)
    } else {
      setInputFocus(false)
    }
  }, [refInput.current])

  return (
    <div className='relative w-full h-16'>
      <input
        id={id}
        type='password'
        onFocus={handleInputFocus}
        onChange={handleOnChange}
        ref={refInput}
        className={`px-2 pt-7 pb-1 w-full absolute outline-none rounded-sm bg-none border items-end ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}
        placeholder=' '
        style={{
          fontSize: `${baseSize}px`,
          borderColor: inputFocus
            ? colorTheme
            : ''
        }}
        width='100%'
      />
      <label className='absolute transition-all mx-2 my-[18px]' style={{
        color: inputFocus
          ? colorTheme
          : '',
        fontSize: inputFocus || refInput.current?.value !== ''
          ? `${smSize}px`
          : `${baseSize}px`,
        transform: inputFocus || refInput.current?.value !== ''
          ? 'translateY(-10px)'
          : ''
      }}>
        {placeholder}
      </label>
    </div>
  )
}

export default InputPassword

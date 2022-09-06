import React, { useCallback, useContext, useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

interface BackgroundValue {
  name: string
  backgroundColor: string
  currentBackgroundColor: string
}

const BackgroundButton: React.FC<BackgroundValue> = ({ name, backgroundColor, currentBackgroundColor }) => {
  const { backgroundTheme, colorTheme, hoverColorTheme, handleBackground } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [isHover, setIsHover] = useState(false)
  const handleHover = useCallback(() => {
    setIsHover(!isHover)
  }, [isHover])
  return currentBackgroundColor === backgroundColor ? (
    <button
      onClick={() => handleBackground(backgroundColor)}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className='flex w-full items-center border rounded-sm py-4'
      style={{
        borderColor: colorTheme,
        color: backgroundColor === 'light'
          ? lightTheme.text
          : darkTheme.text,
        background: backgroundColor === 'light'
          ? lightTheme.background
          : backgroundColor === 'dark'
            ? darkTheme.background
            : '#000'
      }}
    >
      <div className='p-2 flex items-center justify-center rounded-full transition-colors mx-4' style={{
        background: isHover
          ? hoverColorTheme
          : ''
      }}>
        <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ background: colorTheme }}>
          <HiCheck className='text-white w-4 h-4' />
        </div>
      </div>
      <span style={{ fontSize: `${baseSize}px` }}>
        {name}
      </span>
    </button>
  ) : (
    <button
      onClick={() => handleBackground(backgroundColor)}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className='flex w-full items-center rounded-sm py-4'
      style={{
        color: backgroundColor === 'light'
          ? lightTheme.text
          : darkTheme.text,
        background: backgroundColor === 'light'
          ? lightTheme.background
          : backgroundColor === 'dark'
            ? darkTheme.background
            : '#000'
      }}
    >
      <div className='p-2 flex items-center justify-center rounded-full transition-colors mx-4' style={{
        background: isHover
          ? hoverColorTheme
          : ''
      }}>
        <div className={`w-6 h-6 rounded-full border-2 ${backgroundColor === 'light' ? 'border-gray-300' : backgroundColor === 'dark' ? 'border-slate-600' : 'border-zinc-600'}`} />
      </div>
      <span style={{ fontSize: `${baseSize}px` }}>
        {name}
      </span>
    </button>
  )
}

export default BackgroundButton

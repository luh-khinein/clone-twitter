import React, { useCallback, useContext, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

interface ButtonValue {
  name: string
  fontSizeValue: number
  currentFontSize: number
}

const ButtonTrail: React.FC<ButtonValue> = ({ name, fontSizeValue, currentFontSize }) => {
  const { colorTheme, hoverColorTheme, lightColorTheme } = useContext(ThemeContext)
  const { exSmSize, handleSize } = useContext(FontSizeContext)
  const [isHover, setIsHover] = useState(false)
  const handleHover = useCallback(() => {
    setIsHover(!isHover)
  }, [isHover])
  return (
    <div className='flex flex-col items-center' style={{ zIndex: 3 }}>
      <button
        onClick={() => handleSize(fontSizeValue)}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className='p-4 transition-colors flex rounded-full items-center justify-center'
        style={{
          background: isHover ? hoverColorTheme : 'transparent'
        }}
      >
        <div
          className={`absolute rounded-full ${currentFontSize === fontSizeValue ? 'w-4 h-4' : 'w-3 h-3'} shadow-md shadow-slate-400`}
          style={{
            background: currentFontSize >= fontSizeValue
              ? colorTheme
              : lightColorTheme
          }}
        />
      </button>
      <span className={`p-1 bg-black text-white mt-9 flex items-center rounded-lg justify-center fixed ${isHover ? 'opacity-70' : 'opacity-0'} pointer-events-none duration-300`} style={{
        fontSize: `${exSmSize}px`
      }}>
        {name}
      </span>
    </div>
  )
}

export default ButtonTrail

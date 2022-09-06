import React, { useContext } from 'react'
import { HiCheck } from 'react-icons/hi'
import { ThemeContext } from '../../utils/theme'

interface ColorValue {
  colorValue: string
  lightColorValue: string
  hoverColorValue: string
  currentColor: string
}

const ColorButton: React.FC<ColorValue> = ({ colorValue, lightColorValue, hoverColorValue, currentColor }) => {
  const { handleColors } = useContext(ThemeContext)
  return currentColor !== colorValue ? (
    <button
      onClick={() =>
        handleColors(colorValue, lightColorValue, hoverColorValue)
      }
      className='w-10 h-10 rounded-full'
      style={{ background: colorValue }}
    />
  ) : (
    <button
      onClick={() =>
        handleColors(colorValue, lightColorValue, hoverColorValue)
      }
      className='w-10 h-10 rounded-full'
      style={{ background: colorValue }}
    >
      <div className='rounded-full h-full w-full flex items-center justify-center'>
        <HiCheck className='text-white w-7 h-7' />
      </div>
    </button>
  )
}

export default ColorButton

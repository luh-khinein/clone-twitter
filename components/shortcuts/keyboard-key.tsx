import React, { useContext } from 'react'
import { darkTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

interface KeyboardKeyValue {
  name: string
}

const KeyboardKey: React.FC<KeyboardKeyValue> = ({ name }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize } = useContext(FontSizeContext)
  return (
    <div className={`px-1.5 flex items-center justify-center rounded-sm shadow ${backgroundTheme === 'light' ? 'bg-gray-100' : backgroundTheme === 'black' ? 'bg-zinc-900' : 'brightness-110'} ${backgroundTheme === 'light' ? 'shadow-gray-400' : backgroundTheme === 'black' ? 'shadow-zinc-500' : 'shadow-slate-500'}`} style={{
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : ''
    }}>
      <span className='flex items-center justify-center text-center' style={{
        fontSize: `${smSize}px`,
        fontFamily: 'monospace'
      }}>
        {name}
      </span>
    </div>
  )
}

export default KeyboardKey

import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const PinnedLists = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className={`w-full px-4 py-2 border-b mt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <h2 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
        Pinned Lists
      </h2>
      <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'} w-full my-9 mx-4`} style={{
        fontSize: `${smSize}px`
      }}>
        Nothing to see here yet — pin your favorite Lists to access them quickly.
      </div>
    </div>
  )
}

export default PinnedLists

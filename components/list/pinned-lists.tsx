import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const PinnedLists = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full px-4 py-2 border-b mt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <h2 className='text-xl font-bold'>
        Pinned Lists
      </h2>
      <div className='w-full text-sm text-slate-400 my-9 mx-4'>
        Nothing to see here yet — pin your favorite Lists to access them quickly.
      </div>
    </div>
  )
}

export default PinnedLists

import React, { useContext } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const YourList: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex flex-col'>
      <h2 className='font-bold py-3 px-4' style={{
        fontSize: `${xlSize}px`
      }}>
        Your Lists
      </h2>
      <div className={`w-full py-10 flex justify-center items-center ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
        fontSize: `${baseSize}px`
      }}>
        You haven't created or followed any Lists. When you do,
        they'll show up here.
      </div>
    </div>
  )
}

export default YourList

import React, { useContext } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/select.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { darkTheme } from '../../libs/colors'

interface Props {
  selectedTweets: number
}

const Selector: React.FC<Props> = ({ selectedTweets }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  return (
    <div className={`w-full flex items-center justify-between py-3 px-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <div className='relative w-full flex px-3'>
        <select
          name='position'
          className={`${s.form_select} w-full rounded-xl`}
        >
          <option value='Beggin'>Beggin</option>
          <option value='End' selected={true}>End</option>
        </select>
        <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
          <span className={s.form_label}>
            Position
          </span>
          <span className={s.form_icon}>
            <MdKeyboardArrowDown className='h-10 w-10' />
          </span>
        </label>
      </div>
      <div className='flex flex-col'>
        <button
          disabled={selectedTweets <= 0}
          className={`disabled:brightness-90 px-3 py-2 rounded-full flex items-center justify-center duration-200 border ${backgroundTheme === 'light' ? 'border-gray-100 hover:bg-gray-50' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-slate-800 hover:brightness-110'}`}
          style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : '',
            color: colorTheme,
            fontSize: `${baseSize}px`
          }}
        >
          Add
        </button>
        <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          {selectedTweets} Tweets
        </span>
      </div>
    </div>
  )
}

export default Selector

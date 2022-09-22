import React, { useContext, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import s from '../../styles/select.module.css'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const DatesSettings: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)

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
      '--base-font-size', `${baseSize}px`
    )
  }, [baseSize])

  return (
    <div className='w-full flex flex-col items-start justify-start py-3'>
      <h2 className='font-bold mb-3 px-3' style={{ fontSize: `${xlSize}px` }}>
        Dates
      </h2>
      <div className='flex flex-col w-full'>
        <h3 className=' px-3 mb-3' style={{ fontSize: `${baseSize}px` }}>
          From
        </h3>
        <div className='flex w-full items-center justify-between'>
          <div className='relative w-full px-3 flex'>
            <select
              name='months'
              className={`${s.form_select} w-full rounded-xl`}
            >
              <option selected={true} value=' '>&nbsp;</option>
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </select>
            <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <span className={s.form_label}>
                Month
              </span>
              <span className={s.form_icon}>
                <MdKeyboardArrowDown className='h-10 w-10' />
              </span>
            </label>
          </div>
          <div className='relative w-[300px] px-3 flex'>
            <select
              name='days'
              className={`${s.form_select} w-full rounded-xl`}
            >
              <option selected={true} value=' '>&nbsp;</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <span className={s.form_label}>
                Day
              </span>
              <span className={s.form_icon}>
                <MdKeyboardArrowDown className='h-10 w-10' />
              </span>
            </label>
          </div>
          <div className='relative w-[400px] px-3 flex'>
            <select
              name='years'
              className={`${s.form_select} w-full rounded-xl`}
            >
              <option selected={true} value=' '>&nbsp;</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
            </select>
            <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <span className={s.form_label}>
                Year
              </span>
              <span className={s.form_icon}>
                <MdKeyboardArrowDown className='h-10 w-10' />
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <h3 className=' px-3 my-3' style={{ fontSize: `${baseSize}px` }}>
          To
        </h3>
        <div className='flex items-center w-full justify-between'>
          <div className='relative w-full px-3 flex'>
            <select
              name='months'
              className={`${s.form_select} w-full rounded-xl`}
            >
              <option selected={true} value=' '>&nbsp;</option>
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </select>
            <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <span className={s.form_label}>
                Month
              </span>
              <span className={s.form_icon}>
                <MdKeyboardArrowDown className='h-10 w-10' />
              </span>
            </label>
          </div>
          <div className='relative w-[300px] px-3 flex'>
            <select
              name='days'
              className={`${s.form_select} w-full rounded-xl`}
            >
              <option selected={true} value=' '>&nbsp;</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <span className={s.form_label}>
                Day
              </span>
              <span className={s.form_icon}>
                <MdKeyboardArrowDown className='h-10 w-10' />
              </span>
            </label>
          </div>
          <div className='relative w-[400px] px-3 flex'>
            <select
              name='years'
              className={`${s.form_select} w-full rounded-xl`}
            >
              <option selected={true} value=' '>&nbsp;</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
            </select>
            <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <span className={s.form_label}>
                Year
              </span>
              <span className={s.form_icon}>
                <MdKeyboardArrowDown className='h-10 w-10' />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatesSettings

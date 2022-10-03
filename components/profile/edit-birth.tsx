import React, { MouseEventHandler, useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/select.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md'

interface BirthValue {
  day: number
  month: string
  year: number
  handlePermition: MouseEventHandler
}

const EditBirth: React.FC<BirthValue> = ({ day, month, year, handlePermition }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const [selectSettings, setSelectSettings] = useState({
    month_e_day: 'Only you',
    year: 'Only you'
  })
  const handleSelectSettings = useCallback((e: any) => {
    e.persist()
    setSelectSettings(prev => ({
      ...prev,
      [e.target.id]: e.target.selected
    }))
  }, [])
  return (
    <div className='flex flex-col w-full px-3'>
      <div className='flex flex-col w-full py-2'>
        <h1 className='font-bold' style={{ fontSize: `${baseSize}px` }}>
          Birth date<span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>&nbsp;·&nbsp;</span>
          <button
            onClick={handlePermition}
            className='font-normal hover:underline'
            style={{ color: colorTheme }}
          >
            Cancel
          </button>
        </h1>
        <p className={`my-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          This should be the date of birth ofthe person using the account. Even if you&apos;re
          making an account for your business, event, or cat.
        </p>
        <p className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Twitter uses your age to customize your experience, including ads, as explained in our
          <Link href='/en/demo-page'>
            <a className='hover:underline' target='_blank' style={{ color: colorTheme }}>
              &nbsp;Privacy Policy
            </a>
          </Link>.
        </p>
      </div>
      <div className='flex items-center justify-between w-full'>
        <div className='relative w-full px-3 flex'>
          <select
            name='month'
            className={`${s.form_select} w-full rounded-xl`}
          >
            <option selected={true} value={month}>{month}</option>
            <option value='January'>January</option>
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
        <div className='relative w-full px-3 flex'>
          <select
            name='day'
            className={`${s.form_select} w-full rounded-xl`}
          >
            <option selected={true} value={day}>{day}</option>
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
        <div className='relative w-full px-3 flex'>
          <select
            name='year'
            className={`${s.form_select} w-full rounded-xl`}
          >
            <option selected={true} value={year}>{year}</option>
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
      <div className='flex flex-col w-full py-3'>
        <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
          Who sees this?
        </span>
        <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          You can control who sees your birthday on Twitter.
          <Link href='/en/demo-page'>
            <a target='_blank' style={{ color: colorTheme }}>
              &nbsp;Learn more
            </a>
          </Link>
        </span>
        <div className='relative w-full px-3 flex my-4'>
          <select
            id='month_e_day'
            className={`${s.form_select} w-full rounded-xl`}
            onChange={handleSelectSettings}
          >
            <option selected={true} value={selectSettings.month_e_day}>{selectSettings.month_e_day}</option>
            <option value='Public'>Public</option>
            <option value='Your followers'>your followers</option>
            <option value='People you follow'>People you follow</option>
            <option value='You follow each other'>You follow each other</option>
          </select>
          <label className={`${s.highlight_color} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <span className={s.form_label}>
              Month and day
            </span>
            <span className={s.form_icon}>
              <MdKeyboardArrowDown className='h-10 w-10' />
            </span>
          </label>
        </div>
        <div className='relative w-full px-3 flex'>
          <select
            id='year'
            className={`${s.form_select} w-full rounded-xl`}
            onChange={handleSelectSettings}
          >
            <option selected={true} value={selectSettings.month_e_day}>{selectSettings.month_e_day}</option>
            <option value='Public'>Public</option>
            <option value='Your followers'>your followers</option>
            <option value='People you follow'>People you follow</option>
            <option value='You follow each other'>You follow each other</option>
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
      <button className='flex w-full py-4 items-center justify-center outline-none duration-200 text-red-600 hover:bg-[rgba(255,90,90,.1)]' style={{
        fontSize: `${baseSize}px`
      }}>
        Remove birth date
      </button>
    </div>
  )
}

export default EditBirth
